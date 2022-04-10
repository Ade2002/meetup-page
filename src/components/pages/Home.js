import React from 'react'
import { DUMMYDATA } from '../../layouts/DummyData'
const Home = () => {
    return (<>
        <div>All meet ups</div>
        <ul>
            {
                DUMMYDATA.map((meetup) => {
                    return <li key={meetup.id}>{meetup.title}</li>
                })
            }
        </ul>

    </>
    )
}

export default Home;