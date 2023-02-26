import Footer from 'components/navigation/Footer'
import Navbar from 'components/navigation/Navbar'
import Layout from 'hocs/layouts/Layout'
import React from 'react'

const Cases = () => {
  return (
    <Layout>
    <Navbar/>
    <div className='pt-28'>
    Cases
    <Footer/>
    </div>
    </Layout>
  )
}

export default Cases
