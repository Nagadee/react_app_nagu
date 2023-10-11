import React, { useState } from 'react'

const Footer = () => {
    const[ininame,setname]=useState('react')
    function changeClick()
    {
      setname('guru')
    }
    return (
    <div style={{textAlign:'center',color:'black',backgroundColor:'lavender',fontFamily:'cursive'}}>
      <p>{ininame}</p>
      <button onClick={changeClick}>Click Me</button>
    </div>
  )
}

export default Footer