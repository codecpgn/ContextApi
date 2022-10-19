import React, { useEffect, useState } from 'react'
const CompA = () => {

  const [num, setnum] = useState(0);
  const [nums, setnums] = useState(0);

  useEffect(()=>{
   // alert("i am clicked");
   document.title = `you clicked me ${num} times`

  
  });
  return (
    <div>
  <button onClick={()=>{
    setnum(num+1)
  }
  }>
Click Me {num}
  </button>
  <br/>
  <button onClick={
    (()=>{
      setnum(num+1);
    })
  }>
Click Me {num}
  </button>
  

    </div>
  )
}

export default CompA