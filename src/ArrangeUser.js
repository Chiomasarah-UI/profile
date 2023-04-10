import React from 'react'
import './ArrangeUser.css'

export const ArrangeUser = ({data}) => {
  return (
    <div className='tin'>
        {data.map((item) =>(
            <div className='wrap' key={item.id}>
              <img src={item.picture} alt="profile"/>
              <div>
                  <p className='idnumber'>{item.id}</p>
                  <p className='name'>{item.title} {item.firstName} {item.lastName}</p>
              </div>
        </div>
        ))}
    </div>
  )
}
