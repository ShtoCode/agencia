import Footer from 'components/navigation/Footer'
import Navbar from 'components/navigation/Navbar'
import Layout from 'hocs/layouts/Layout'
import React from 'react'

const Services = () => {
  return (
    <Layout>
    <Navbar/>
    <div className='pt-28'>
    Services
    <Footer/>
    </div>
    </Layout>
  )
}

export default Services
