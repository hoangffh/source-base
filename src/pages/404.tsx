import Layout from '@src/layout'
import { NextPageWithLayout } from '@src/interfaces'
import { ReactElement } from 'react'
const Index: NextPageWithLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
    <div className="bg-white p-20 rounded-2xl">
      <p className="text-blue-primary font-bold text-9xl italic text-center">
        404
      </p>
      <p className="text-xl">
      Trang bạn đang tìm kiếm không thể được tìm thấy. Bạn có thể quay lại màn hình chính.
      </p>
    </div>
  </div>
  )
}
Index.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
export default Index
