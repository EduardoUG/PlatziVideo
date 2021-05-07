import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrouselItem'
import useInitialState from '../hooks/useInitialState'

import '../assets/styles/App.scss'


const Home = ({ mylist, trends, originals}) => {
  return (
    <>
      <Search />

      {mylist.length > 0 &&(
        <Categories title="Mi lista">
          <Carrousel>
            {mylist.map(item => 
              <CarrouselItem 
                key={item.id} 
                {...item}
                isList
              />
            )}
          </Carrousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrousel>
          {trends.map(item => 
            <CarrouselItem key={item.id} {...item} />
          )}
        </Carrousel>
      </Categories>

      <Categories title="Originales de PlatziVideo">
        <Carrousel>
          {originals.map(item => 
            <CarrouselItem key={item.id} {...item} />
          )}
        </Carrousel>
      </Categories>

    </>  
  )
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home)