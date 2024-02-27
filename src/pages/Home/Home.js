import React from 'react'
import './home.scss'
import Sponsor from '../../components/sponsor/Sponsor'
import FutureMatches from '../../components/futureMatches/FutureMatches'
import BestPlayers from '../../components/bestPlayers/BestPlayers'
import Statistics from '../../components/statistics/Statistics'
function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <Sponsor/>
        <FutureMatches/>
        <BestPlayers/>
        <Statistics/>
      </div>
    </div>
  )
}

export default Home