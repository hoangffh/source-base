'use client'
import { URL } from '@src/utils/constants/index'
import { GlobalOutlined, HomeOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const SideBar = ({ theme }: { theme: any }) => {
  const router = useRouter()
  const [openKeys, setOpenKeys] = useState(['sub1'])

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const items: MenuItem[] = [
    getItem('Dashboard', URL.HOME, <HomeOutlined />),
    getItem('Quản lý Nguồn khách hàng', URL.GAME, <GlobalOutlined />),
    // getItem('Quản lý khách hàng', URL.HOME, <TeamOutlined />),
    // getItem('Quản lý gửi', 'sub3', <MailOutlined />, [
    //   getItem('Quản lý gửi mail', URL.HOME),
    //   getItem('Quản lý gửi inquiry', URL.HOME),
    // ]),

    // getItem(
    //   'Quản lý template',
    //   URL.HOME,
    //   <FileTextOutlined />
    // ),
    // getItem('Quản lý tài liệu', URL.HOME, <FileTextOutlined />),
    // getItem('Thông tin liên hệ', URL.HOME, <InfoCircleOutlined />)
  ]

  const handleClick = (keys: any) => {
    router.push(keys.key)
  }

  return (
    <Menu
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={handleClick}
      items={items}
      theme={theme}
      defaultSelectedKeys={[URL.HOME]}
    />
  )
}

export default SideBar
