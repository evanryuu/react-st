import { useTranslation } from 'react-i18next'

import reactLogo from '@/assets/react.svg'
import { Button } from '@/components'
import { useCountStore } from '@/store'

const Home = () => {
  const { t } = useTranslation()
  const countStore = useCountStore()
  return (
    <>
      <div>
        { t('thisIsHomePage', { keyPrefix: 'home' }) }
      </div>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Button onClick={() => countStore.increment()}>
            count is
            { ' ' }
            { countStore.count }
          </Button>
          <p>
            { t('edit', { keyPrefix: 'global' }) }
            { ' ' }
            <code>src/App.tsx</code>
            { ' ' }
            { t('testHMR', { keyPrefix: 'home' }) }
          </p>
        </div>
        <p className="read-the-docs">
          { t('readTheDocs', { keyPrefix: 'home' }) }
        </p>
      </div>
    </>
  )
}

export default Home
