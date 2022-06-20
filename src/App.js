import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, Homepage, Intention, Oracle, Prints, Shop, TwoSouls } from './components'
import './App.css'
import ParticleBackground from './components/ParticleBackground'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    {/* <ParticleBackground style={{zIndex: "0"}}/> */}
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage />} />                            
                            <Route path='/Intention' element={<Intention />} />                            
                            <Route path='/Oracle' element={<Oracle />} />  
                            <Route path='/Prints' element={<Prints />} />  
                            <Route path='/Shop' element={<Shop />} />                            
                            <Route path='/TwoSouls' element={<TwoSouls />} />                            
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