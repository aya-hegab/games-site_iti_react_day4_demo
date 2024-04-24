import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutWithHeader from '../components/Layout/LayoutWithHeader'
import Games from '../pages/Games'
import GameDetails from '../pages/GameDetails'
import ContactUs from '../pages/ContactUs'
import AddGame from '../pages/AddGame'
import NotFound from '../pages/NotFound'
import Counter from '../pages/Counter'

export default function Router() {
    return (
        <Routes>
            <Route element={<LayoutWithHeader />}>
                <Route path='' element={<Games />} />
                <Route path='/game-details/:id' element={<GameDetails />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/add-game' element={<AddGame />} />
            </Route>
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
