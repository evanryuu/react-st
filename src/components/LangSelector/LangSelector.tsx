import React, { useEffect, useState } from 'react'

import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

import { langs } from '@/i18n'
import { useAppStore } from '@/store'

import type { LangType } from '@/store'

export interface LangSelectorProps extends React.HTMLAttributes<HTMLSelectElement> {
  className?: string
}

export const LangSelector: React.FC<LangSelectorProps> = (props) => {
  const { className } = props
  const { i18n } = useTranslation()
  const { lang: appLang, setLang } = useAppStore()
  const [selectedlang, setSelectedLang] = useState('')
  const map: { [k in LangType]: string } = {
    zh_CN: '中文',
    en_US: 'English',
  }
  useEffect(() => {
    i18n.changeLanguage(selectedlang)
  }, [selectedlang])

  const classes = classnames('lang-selector', 'text-sm', className)

  return (
    <select
      className={classes}
      onChange={e => setLang(e.target.value as LangType)}
      defaultValue={appLang}
    >
      {
        Object.keys(langs)
        .map(lang => (
          <option
            key={lang}
            value={lang}
          >
            { map[lang as LangType] }
          </option>
        ))
      }
    </select>
  )
}

export default LangSelector
