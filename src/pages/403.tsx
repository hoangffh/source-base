
import { NextPageWithLayout } from '@src/interfaces'
import Layout from '@src/layout'
import { ReactElement } from 'react'

const Index: NextPageWithLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
      <div className="bg-white p-20 rounded-2xl">
        <p className="text-blue-primary font-bold text-9xl italic text-center">
          403
        </p>
        <p className="text-xl">
          Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại để tiếp tục sử dụng
        </p>
      </div>
    </div>
  )
}

Index.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}


export default Index
