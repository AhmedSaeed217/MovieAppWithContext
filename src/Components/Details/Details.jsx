import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import AllMoviesContext from '../Contexts/MoviesContext';



const Details = () => {

    const imgUrl = "https://image.tmdb.org/t/p/w500/";
    const allData = useContext(AllMoviesContext)
    const { id } = useParams()


    const filteredData = allData.data.filter((elem) => +elem.id === +id);

    return (
        <div className="container p-3 mt-5">
            <h2 className='text-center mb-3'>Movie Details</h2>
            <div className='row'>
                {filteredData.map(filtredMovie => <div className="col-md-12">
                    <div className="row justify-contetnt-center align-items-center bg-dark text-light ">
                        <div className="col-md-4">
                            <img src={imgUrl + filtredMovie.poster_path} alt="" className='img-fluid rounded' />
                        </div>
                        <div className="col-md-8 ">
                            <h3><span className='text-warning fs-3'>Title</span> : {filtredMovie.original_title}</h3>
                            <p className='fs-4'><span className='text-warning fs-3'>Overview</span> : {filtredMovie.overview}</p>
                            <p className='fs-4'><span className='text-warning fs-3'>Date</span> : {filtredMovie.release_date}</p>
                            <p className='fs-4'><span className='text-warning fs-3'>Language</span> : {filtredMovie.original_language}</p>
                            <p className='fs-4'><span className='text-warning fs-3'>Vote Average</span> : {filtredMovie.vote_average}</p>
                        </div>
                    </div>
                </div>
                )}

            </div>
        </div>
    );
}

export default Details;
