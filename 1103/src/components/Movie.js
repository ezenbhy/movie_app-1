import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie ({id,title,year,summary,poster,genres}){
   return(
      <div className="movie">
      <img src={poster} alt={title} title={title}/>
      <div className="movie_data">
         <h3 className="movie_title" style={{backgroundColor: '#eee'}}>{title}</h3>
         <h4 className="movie_year">{year}</h4>
         <ul className="movie_genres">
            {genres.map((genre,index) => {
               return (
                  <li key={index} className="movie_genre">{genre}</li>
               );
            })}
         </ul>
         <p className="movie_summary">{summary.slice(0,180)} ...</p>
      </div>
      </div>
   );
}

Movie.propTypes = {
   id:PropTypes.number.isRequired,
   title:PropTypes.string.isRequired,
   year:PropTypes.number.isRequired,
   summary:PropTypes.string.isRequired,
   poster:PropTypes.string.isRequired,
};

export default Movie;