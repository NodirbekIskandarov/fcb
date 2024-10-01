import React, { useEffect } from 'react'
import './allGamers.scss'
import { getRequest } from '../../utils/request'
import { all_players } from '../../utils/API_urls'
function AllGamers() {
  useEffect(() => {
    getRequest(all_players)
    .then(response => {
      console.log(response, "response oyinchilar")
    })
    .catch(error => {
      console.log(error)
      
    })
  }, [])
  return (
    <div className='all_gamers'>
      hamma oyinchilar uchun joy
    </div>
  )
}

export default AllGamers