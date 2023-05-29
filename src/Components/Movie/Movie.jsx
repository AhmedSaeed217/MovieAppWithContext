import * as React from 'react';
import { useContext } from 'react';
import AllMoviesContext from '../Contexts/MoviesContext';
import { Link } from 'react-router-dom';



const Movie = () => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  const movies = useContext(AllMoviesContext)
  console.log(movies.data)

  {/* <Button size="small"><Link to={`/${movie.id}/update`}>Update</Link></Button>
              <Button size="small"><Link to={`/${movie.id}`}>Details</Link></Button>
              <Button size="small" onClick={() => movies.deleting(movie.id)} >Delete</Button> */}
  return (

    <>
      <div className="container">
        <div className="row gy-2  mb-3">
          {movies.data.map(movie => <div key={movie.id} className="col-md-12">
            <div className="row p-2 rounded justify-contetnt-center align-items-center bg-dark text-light ">
              <div className="col-md-4">
                <img src={imgUrl + movie.poster_path} alt="" className='img-fluid rounded' />
              </div>
              <div className="col-md-8 ">
                <h3><span className='text-warning fs-3'>Title</span> : {movie.original_title}</h3>
                <p className='fs-4'><span className='text-warning fs-3'>Overview</span> : {movie.overview}</p>
                <p className='fs-4'><span className='text-warning fs-3'>Date</span> : {movie.release_date}</p>
                <p className='fs-4'><span className='text-warning fs-3'>Language</span> : {movie.original_language}</p>
                <p className='fs-4'><span className='text-warning fs-3'>Vote Average</span> : {movie.vote_average}</p>
                <div className="item-btns">
                  <button className='btn btn-outline-warning me-2'><Link className='text-decoration-none text-white' to={`/${movie.id}/update`}>Update</Link></button>
                  <button className='btn btn-outline-info me-2' ><Link className='text-decoration-none text-white' to={`/${movie.id}`}>Details</Link></button>
                  <button className='btn btn-outline-danger' onClick={() => movies.deleting(movie.id)} >Delete</button>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

    </>

  )



}



export default Movie;

/**/
