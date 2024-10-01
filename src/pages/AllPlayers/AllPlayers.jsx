import React from 'react'
import './allPlayers.scss'
import AllGamers from '../../components/allGamers/AllGamers'
function AllPlayers() {
  return (
    <div className='all_players'>
        <div className='container'>
            <AllGamers/>
        </div>
    </div>
  )
}

export default AllPlayers