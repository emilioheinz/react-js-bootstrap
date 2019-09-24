import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

export default function RouteWrapper(props) {
  const { component: Component, isPrivate, ...rest } = props

  return (
    <Route {...rest} component={passProps => <Component {...passProps} />} />
  )
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}
