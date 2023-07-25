import React from 'react'

import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'

import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import i18n from './i18n'

import 'uno.css'
import './styles/index.css'

const Root = () => {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </ErrorBoundary>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Root />)

export default Root
