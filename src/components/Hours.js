import React from 'react'

function Hours({location}) {

  return (
    <>
    <div>
        <p><strong>Hours</strong></p>
        <p>Mon:</p>
        <p>Tue:</p>
        <p>Wed:</p>
        <p>Thu:</p>
        <p>Fri:</p>
        <p>Sat:</p>
        <p>Sun:</p>
    </div>
    <div>
        <p>{location.mon}</p>
        <p>{location.tue}</p>
        <p>{location.wed}</p>
        <p>{location.thu}</p>
        <p>{location.fri}</p>
        <p>{location.sat}</p>
        <p>{location.sun}</p>
    </div>
    </>
  )
}

export default Hours