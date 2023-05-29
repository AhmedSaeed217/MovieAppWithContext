import React, { useContext, useState } from 'react';
import AllMoviesContext from '../Contexts/MoviesContext';



const AddMovie = () => {
  const data = useContext(AllMoviesContext)


  const [addedData, setAddedData] = useState({
    id: "",
    original_language: "",
    original_title: "",
    overview: "",
    poster_path: ""

  })
  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddedData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(addedData)
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    data.adding(addedData)

    setAddedData({
      id: "",
      original_language: "",
      original_title: "",
      overview: "",
      poster_path: ""
    });
  };


  console.log(data)


  return (
    <div className="container p-3">
      <h2 className='text-center mt-3 mb-3'>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie ID</label>
        <input className='form-control' type='text' name='id' value={addedData.id} onChange={handleChange} />
        <label>Movie Name</label>
        <input className='form-control' type='text' name='original_title' value={addedData.original_title} onChange={handleChange} />
        <label>Overview</label>
        <input className='form-control' type='text' name='overview' value={addedData.overview} onChange={handleChange} />
        <label>Language</label>
        <input className='form-control' type='text' name='original_language' value={addedData.original_language} onChange={handleChange} />
        <label>Image Link</label>
        <input className='form-control' type='text' name='poster_path' value={addedData.poster_path} onChange={handleChange} />
        <input className='form-control btn btn-outline-success' type='submit' value="Add Movie" />
      </form>
    </div>
  );
}

export default AddMovie;
