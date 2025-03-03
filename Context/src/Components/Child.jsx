import React, {useContext} from 'react'
import { context } from '../App'

const Child = () => {
    
  const { name } = useContext(context)
  return (
    <div>hello {name}</div>
  )
}

export default Child