import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import constant from '@/config/constant'

export type LangType = 'en_US' | 'zh_CN'

interface IAppState {
  lang: LangType
  setLang: (lang: LangType) => void

  darkMode: boolean
  setDarkMode: (val: boolean) => void

}

export const useAppStore = create<IAppState>()(
  persist(
    (set, get) => ({
      lang: 'zh_CN',
      setLang: val => set(() => ({ lang: val })),

      darkMode: false,
      setDarkMode: val => set(() => ({ darkMode: val })),

    }),
    {
      name: constant.APP_SETTING,
    },
  ),
)
