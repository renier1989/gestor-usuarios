import React from 'react'

function Container({children}) {
  return (
    <div className='lg:max-w-[700px] sm:min-w-[700px]'>{children}</div>
  )
}

export default Container