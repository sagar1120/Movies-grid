import React, {useEffect, useState} from 'react';
import axios from "axios";

function Movies() {
    const [movies,setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');
    const [searchedMovies,setSearchedMovies] = useState([]);
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
        .then((res)=>{setMovies(res.data.results);})
    
    }, [] );
    useEffect( ()=>{
        if(searchMovie == ''){
            setSearchedMovies([])
        }else{
        axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=cfe422613b250f702980a3bbf9e90716`)
        .then( (res)=>{
            setSearchedMovies(res.data.results)
        } )
    }
    }, [searchMovie] )
    
    

      
  return (
    <>
    <form action='/'>
    <input type="text" placeholder='Search For Movies...' name='searchBox' id="search" onChange={ (e) => {setSearchMovie(e.target.value)}}/>
    </form>
   
   {searchedMovies.length == 0 && searchMovie == '' ? <div id='main'>
        {movies.map((item,i)=>{
            return (
            <div className='cards'>
                <img className='cardImage' src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}/>
                <h3 className='titleName'>{item.original_title}</h3>
            </div>)
        })}
    </div> : <div id='main'>
        {searchedMovies.map((item,i)=>{
            return (
            <div className='cards'>
                <img className='cardImage' src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}/>
                <h3 className='titleName'>{item.original_title}</h3>
            </div>)
        })}
    </div>}
    </>
  )
}

export default Movies