import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Market from '../pages/Market.jsx'
import Create from '../pages/Create.jsx'
import Contact from '../pages/Contact.jsx'
import SellerProfile from '../pages/SellerProfile.jsx'
import EditProfile from '../pages/EditProfile.jsx'
import Wallet from '../pages/Wallet.jsx'
import NftDetails from '../pages/NftDetails.jsx'

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/market' element={<Market />} />
        <Route path='/create' element={<Create />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/seller-profile' element={<SellerProfile />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/market/:id' element={<NftDetails />} />
    </Routes>
}

export default Routers