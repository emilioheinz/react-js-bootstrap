import React from 'react'
import { useDispatch } from 'react-redux'

import { exampleRequest } from '~/redux/modules/example/actions'
// import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch()

  function buttonPressed() {
    const requestParams = {
      firstNumber: 3,
      secondNumber: 4,
    }

    dispatch(exampleRequest(requestParams))
  }

  return (
    <>
      <h1>HOME</h1>
      <button type='button' onClick={buttonPressed}>
        CLICK HERE TO TEST
      </button>
    </>
  )
}
