import './App.css';
import api from './api/axiosConfig'; 
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState(); // re-render app component when the state of the movies variables changes
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  
  const getMovies = async () => { // async helps ensure that the UI will not be blocked or timeout

    try { // in case something goes wrong, wrap in a try-catch block
      const response = await api.get("/api/v1/movies"); // pass additional path information to the get method. This will be appended to the baseURL setting 
    
      // console.log(response.data); // log the results return from the call to the relevant endpoint

      setMovies(response.data);

    } catch (err) {
      console.log(err);
    }
  } 

  //  get request to axios for data pertaining to a single movie
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);

      const singleMovie = response.data;

      // set state for the movie variable
      setMovie(singleMovie);

      // extract reviews array from the movie data and track the state of the reviews array
      setReviews(singleMovie.reviews);

    } catch (error) {
        console.log(error);
    }
  }

  // useEffect so that the getMovies function is executed when the app component first loads
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
          <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
