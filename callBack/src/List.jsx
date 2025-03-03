import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const List = ({getItems}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems)  // if useCallback  =>  return getItems as func  ,, useMemo  =>  return getItems as value (in this it is a Array)
        console.log(getItems)
    },[getItems]);
    
  return (
    <div>
        {items.map((item,index) => {
           return <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default List