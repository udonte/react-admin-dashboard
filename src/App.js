import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {NavBar, SideBar, ThemeSettings, Notification, UserProfile, Header, Footer, Chat, ChartsHeader, Cart, Button} from './components'

import { Ecommerce, Orders, Calendar, Employees,  Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line} from './pages'

import './App.css'; 

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>

          {/* TOOLTIP DIV */}
           <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'>
              <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{background: 'blue', borderRadius: '50%'}}>
                <FiSettings />
              </button>
            </TooltipComponent>
           </div>

          {/* RENDER SIDE BAR CONDITION */}

          {
            activeMenu ? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <SideBar />
                </div> ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>SideBar</div>
            )}

            <div className={
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md-ml-72'
              : 'flex-2'}`
            }>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <NavBar />
              </div>
            </div>

            <div>
              <Routes>
                {/* DASHBOARD */}
                <Route path='/' element='ECommerce' />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* PAGES */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* APPS */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />
                {/* CHARTS */}
                <Route path='/line' element={<Line />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/stacked' element={<Pyramid />} />
              </Routes>
            </div>
            
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;