import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSideProps } from 'next'
import { NextPageWithLayout } from '@src/interfaces'
import Layout from '@src/layout'
import { ReactElement, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { ModalSubmitVisa } from '@src/components/modal'

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation()
  const [isOpenModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(!isOpenModal)

  return (
    <div className="py-6">
      <div className="bg-white max-w-[340px] mx-auto rounded-2xl px-8 py-6 sm:max-w-[480px]">
        <div className="flex justify-center mb-4">
          <button
            className="block my-10 w-full py-2 text-xl font-medium text-white rounded-xl border border-solid border-blue-primary bg-blue-primary cursor-pointer hover:bg-white hover:text-blue-primary"
            onClick={handleOpenModal}
          >
            {t('v01.submission')}
          </button>
        </div>
        <ModalSubmitVisa isOpen={isOpenModal} handleOpen={handleOpenModal} />
      </div>
    </div>
  )
}

Index.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Index
