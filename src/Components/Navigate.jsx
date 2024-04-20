import React from 'react'

const Navigate = ({ titles, setDisplay }) => {

  

  return (

    <div>
      <h2>This is the Navigate</h2>
      {titles.map((title, i) => (
        <div onClick={() => setDisplay(`${title}`)} key={i}>
          <p>{title}</p>
        </div>
      ))}
    </div>
  )
}

export default Navigate
