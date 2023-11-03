import { BuildingIcon, CircleQuestionMarkIcon } from '@src/assets/svg'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

const Header = () => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const handleResize = (value: any) => {
      setCollapsed(value.target.innerWidth <= 640 ? true : false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="bg-blue-primary h-16 flex justify-between items-center px-4 sm:px-[30px]">
      <div>
        <div className="text-white">{!collapsed ? 'Logo' : 'Logo'}</div>
      </div>

      <div className="flex justify-between items-center gap-6">
        <div>
          <CircleQuestionMarkIcon />
          <p className="text-[8px]">{t('header.help')}</p>
        </div>
        <BuildingIcon />
      </div>
    </header>
  )
}

export default Header
