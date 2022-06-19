import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Homepage, Navbar } from './components'
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage />} />                            
                        </Routes>
                    </div>
                </Layout>
                {/* <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                        Collab Project <br />
                        All Rights Reserved
                    </Typography.Title>
                </div> */}
            </div>
        </div>
    )
}

export default App