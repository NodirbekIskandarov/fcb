import React from 'react'
import './statistika.scss'
import StatisticsOfGames from '../../components/statisticsOfGames/StatisticsOfGames'
import BestPlayersOfMatch from '../../components/bestPlayersOfMatch/BestPlayersOfMatch'
import OtherPlayersStatistics from '../../components/otherPlayersStatistics/OtherPlayersStatistics'
function Statistika() {
  return (
    <div className='statistika'>
        <div className='container'>
            <StatisticsOfGames/>
            <BestPlayersOfMatch/>
            <OtherPlayersStatistics/>
        </div>
    </div>
  )
}

export default Statistika