import React from 'react'
import { useDispatch } from 'react-redux'

const ReduxFooter = () => {
  const dispatch=useDispatch()
  return (
    <>
    <div className='sub_container' >
      <h3>        리덕스풋터       </h3>
    </div>
    </>
  )
}

export default ReduxFooter
