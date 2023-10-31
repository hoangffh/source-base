
import {  Table } from 'antd'
import { memo } from 'react'
interface DataType {
  id: string
}



interface IProps {
  dataSource: DataType[]
  rowSelection: any
  loading: boolean,
  rowKey:string,
  //Array
  columns:any,
  scroll?:Object,
  bordered?:boolean,
  pagination?:boolean,
  size?:any,
  showHeader?:boolean,
  //[ascend, descend]
  sortDirections?:any,
  virtual?:boolean
}

const BaseTable = ({
  dataSource,
  rowSelection,
  loading,
  rowKey,
  columns,
  scroll,
  bordered = false,
  pagination = false,
  size = 'middle',
  showHeader,
  sortDirections,
  virtual = false

}: IProps) => {
  

  
  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns as any}
        dataSource={dataSource}
        scroll={scroll}
        pagination={pagination as any}
        bordered ={bordered}
        rowKey={rowKey}
        loading={loading}
        size ={size}
        showHeader ={showHeader}
        sortDirections={sortDirections}
        virtual ={virtual}
      />
    </div>
  )
}

export default memo(BaseTable)
