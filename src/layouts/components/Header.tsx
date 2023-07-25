import React from 'react'

import { useTranslation } from 'react-i18next'

import { DarkModeSwitcher, LangSelector } from '@/components'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div
      className="fixed top-0 left-0 right-0 z-30 flex justify-between px-4 text-xs h-4 py-3 bg-blue-200"
    >
      <div />
      <span className="absolute left-1/2 translate-x--1/2 text-md">{ t('headerTip') }</span>
      <div className="flex items-center">
        <DarkModeSwitcher className="text-lg ml-4 flex items-center cursor-pointer hover:fill-true-gray-700" />
        <LangSelector className="text-lg flex items-center ml-4" />
      </div>
    </div>
  )
}

export default Header
