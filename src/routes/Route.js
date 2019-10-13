import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

export default function RouteWrapper(props) {
  const { component: Component, isPrivate, ...rest } = props

  // Here we can look if the user is logged or not and do the redirects

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
