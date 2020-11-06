import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';
import './Home.css';

class App extends React.Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const{
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    this.setState({movies, isLoading:false});
  }

  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // },6000)
    this.getMovies();
  }

  render(){

    const {isLoading, movies} = this.state;

    return(
      <section className="container">
        {isLoading ? (<div className="loader"><span className="loader_text">'Loading...'</span></div>) : 
        (<div className="movies">
          {movies.map(movie => (<Movie
          id={movie.id}
          title={movie.title}
          year={movie.year}
          summary={movie.summary}
          poster={movie.medium_cover_image} 
          genres={movie.genres} 
          />))}
        </div>)}
      </section>
    );
  }
}

export default App;
