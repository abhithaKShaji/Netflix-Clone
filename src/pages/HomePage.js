import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import {Originals,Action,comedyMovies,romanceMovies,horrorMovies,documentaries} from '../url'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import Footer from '../Components/Footer/Footer'


function HomePage() {
  return (
    <div>
        <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={Action} title='Action Movies' isSmall/>
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={romanceMovies} title='Romantic Movies' isSmall/>
      <RowPost url={horrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={documentaries} title='Documentary' isSmall/>
      <Footer/>
    </div>
  )
}

export default HomePage
