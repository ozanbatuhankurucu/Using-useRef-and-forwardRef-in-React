import React, { forwardRef } from 'react'

const Input = (props, ref) => {
  return <input {...props} ref={ref} />
}

export default forwardRef(Input)
