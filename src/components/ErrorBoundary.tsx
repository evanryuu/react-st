import type { ErrorInfo, ReactNode } from 'react'
import React, { Component } from 'react'

import i18nInstance from '@/i18n'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error)
    this.setState({ hasError: true, error })
  }

  render() {
    if (this.state.hasError)
      return <div>{ i18nInstance.t('Oops, something went wrong!') }</div>

    return this.props.children
  }
}

export default ErrorBoundary
