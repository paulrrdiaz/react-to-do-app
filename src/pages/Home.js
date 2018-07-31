import React from 'react'
import Sidebar from '../components/sidebar'
import Tasks from '../containers/Tasks'

const Home = () => (
  <div className="container">
    <Sidebar />
    <Tasks />
  </div>
)

export default Home