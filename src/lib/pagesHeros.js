import React from 'react'

export default function PagesHeros(props) {
  return (
    <div className="container">
        <div className="AllProductImg row">
          <div>
            <img
              // src={props.img}
              src={props.img}
              alt="herosImage"
            />
          </div>
        </div>
      </div>
  )
}
