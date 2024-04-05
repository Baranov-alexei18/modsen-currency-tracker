import React, { Component, ErrorInfo, ReactNode } from 'react';

import { Loader } from '../ui-components/Loader';

import classes from './styles.scss';

type ErrorBoundaryState = {
  hasError: boolean;
}
type ErrorBoundaryProps = {
  children: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps | Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className={classes.wrapper}>
          <Loader />
          <h1>Something went wrong, try again later</h1>
        </div>
      );
    }

    return children;
  }
}
