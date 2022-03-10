import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {Originals,Action,comedyMovies,romanceMovies,horrorMovies,documentaries} from './url'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={Action} title='Action Movies' isSmall/>
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={romanceMovies} title='Romantic Movies' isSmall/>
      <RowPost url={horrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={documentaries} title='Documentary' isSmall/>
    </div>
  );
}

export default App;
