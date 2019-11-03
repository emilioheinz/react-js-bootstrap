import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { exampleRequest } from '~/store/modules/example/actions'
import { ExampleApiService } from '~/services'
// import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch()
  const [example, setExample] = useState([])

  useEffect(() => {
    async function getExample() {
      const response = await ExampleApiService.getAll()

      setExample(response)
    }

    getExample()
  }, [])

  useEffect(() => {
    console.log(example)
  }, [example])

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
