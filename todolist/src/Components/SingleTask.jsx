import React from 'react'

const SingleTask = ({task}) => {
  return (
    <div style={{marginTop:"10px",textAlign:"center",border:"5px solid pink",color:"white", fontSize:"24px"}}>
      {task}
    </div>
  )
}

export default SingleTask
