import React from 'react';
import PropTypes from 'prop-types';

function Movie ({id, year, title, summary, poster}) {
   return(
      <>
      <img src={poster} alt={title} title={title}/>
      <h1>{title}</h1>
      <h2>{year}</h2>
      <p>{summary.slice(0,180)} ...</p>
      </>
   );
}

Movie.propTypes = {
   id:PropTypes.number.isRequired,
   year:PropTypes.number.isRequired,
   title:PropTypes.string.isRequired,
   summary:PropTypes.string.isRequired,
   poster:PropTypes.string.isRequired,
};

export default Movie;