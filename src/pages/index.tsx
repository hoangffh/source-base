/* eslint-disable import/no-unused-modules */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSideProps } from 'next'
import { NextPageWithLayout } from '@src/interfaces'
import Layout from '@src/layout'
import { ReactElement } from 'react'

const Index: NextPageWithLayout = () => {
  return <div></div>
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
