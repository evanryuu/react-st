import React from 'react'

import { useTranslation } from 'react-i18next'

import MyGithub from '@/components/MyGithub'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div
      className="fixed justify-end py-2 px-4 bottom-0 left-0 right-0 h-4 text-white text-sm flex z-30  items-center bg-blue-200"
    >
      <span className="absolute left-1/2 translate-x--1/2 text-xs">{ t('footerTip') }</span>
      <MyGithub type="tag" className="text-white hover:text-white text-lg" />
    </div>
  )
}

export default Footer
