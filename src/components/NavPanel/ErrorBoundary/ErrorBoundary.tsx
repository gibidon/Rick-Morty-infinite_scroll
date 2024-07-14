import { Component, ErrorInfo, ReactNode } from 'react'

import { Link, Navigate } from 'react-router-dom'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.log('###error: ', error)

    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('##error', error)
    console.log('##errorInfo', errorInfo)
    // return <Navigate to="/" />
    window.location.href = '/'
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <h1>
          Что-то пошло не так... <Link to="/">Вернуться на главную</Link>
        </h1>
      )
    }

    return this.props.children
  }
}
