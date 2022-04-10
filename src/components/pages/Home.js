import React from 'react'
import MeetUPList from '../meetups/MeetUpList'
import { DUMMYDATA } from '../../layouts/DummyData'
const Home = () => {
    return (<>
        <div>All meet ups</div>
        <ul>
           <MeetUPList meetups={DUMMYDATA}/>
        </ul>

    </>
    )
}

export default Home;