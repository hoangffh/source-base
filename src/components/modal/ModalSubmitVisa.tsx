import React from 'react'
import { Dialog } from '@material-tailwind/react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const ModalSubmitVisa = ({
  handleOpen,
  isOpen,
}: {
  handleOpen: () => void
  isOpen: boolean
}) => {
  const router = useRouter()
  const { t } = useTranslation()
  return (
    <>
      <Dialog open={isOpen} handler={handleOpen} size="xs">
        <div className="text-xl font-medium text-[#28292B] p-6">
          申請（しんせい）しますか？
        </div>
        <div className="p-6 flex justify-center gap-6">
          <button
            onClick={handleOpen}
            className="w-1/2 font-semibold text-[#28292B] rounded-lg py-[2px] border border-solid bg-white cursor-pointer hover:text-red-600"
          >
            <span>{t('common.cancel')}</span>
          </button>
          <button
            onClick={() => {
              router.push('/visa-submission'), handleOpen
            }}
            className="w-1/2 rounded-lg py-[2px] text-white border border-solid border-blue-primary bg-blue-primary cursor-pointer hover:bg-white hover:text-blue-primary"
          >
            <span>Ok</span>
          </button>
        </div>
      </Dialog>
    </>
  )
}

export default ModalSubmitVisa
