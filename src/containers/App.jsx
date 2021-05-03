import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrouselItem'
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss'

const API = 'http://localhost:3000/initalState'

const App = () => {
  const initialState = useInitialState(API)
  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 &&(
        <Categories title="Mi lista">
          <Carrousel>
            {initialState.mylist.map(item => 
              <CarrouselItem key={item.id} {...item} />
            )}
          </Carrousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrousel>
          {initialState.trends.map(item => 
            <CarrouselItem key={item.id} {...item} />
          )}
        </Carrousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carrousel>
          {initialState.originals.map(item => 
            <CarrouselItem key={item.id} {...item} />
          )}
        </Carrousel>
      </Categories>

      <Footer />
    </div>  
  )
}

export default App