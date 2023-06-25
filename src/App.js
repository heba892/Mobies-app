import React, { useEffect, useState } from 'react'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=5e77de6'
const App = () => {

  const [movies , setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data =await response.json();
    setMovies(data.Search)
  }
  useEffect(() =>{
    searchMovies('happy')

  },[])
  return (
    <div className='app'>
    <h1>MovieLand</h1>
    <div className='search'>
        <input
         placeholder='search for movies'
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img 
        src={searchIcon} 
        alt='search'
        onClick={() => searchMovies(searchTerm)}></img>

    
    </div>

    {
      movies?.length > 0
      ?(
<div className='container'>
{movies.map((movie) => (
  <MovieCard movie = {movie}></MovieCard>
))}
    </div>
      ):(
        <div className='empty'><h2>o Movies Found</h2>N</div>
      )
    }
    
      
    </div>
  )
}

export default App
