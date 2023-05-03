import { useState, useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import MyNav from "./components/MyNav/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./components/MovieList/MovieList";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetailes/MovieDetails";

function App() {
  const [movies, setMovies] = useState([

    {
      id: uuidv4(),
      title: "When They See Us",
      description: "When They See Us is a 2019 American crime drama television miniseries created.",
      poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_Vvk0h2_Ktr-ljWQgA6J5jKMUbsLlEyN-g&usqp=CAU",
      rating: "5",
      trailer: "https://www.youtube.com/embed/YyoSErErnCE"
    },
  
   
     { 
      id: uuidv4(),
      title: "Prey",
      description: "This horror-thriller from Blumhouse & Hyde Park with Director Franck Khalfoun. ",
      poster: "https://m.media-amazon.com/images/I/71Dgjbdg7oL._AC_UY327_FMwebp_QL65_.jpg",
      rating: "3",
      trailer: "https://www.youtube.com/embed/wZ7LytagKlc"
    },
  
    {
      id: uuidv4(),
      title: "Shawshank Redemption",
      description: "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont. ",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FEhiTq_HO-_ezUQgeTVa0_uledIeaVWOgQ&usqp=CAU",
      rating: "5",
      trailer: "https://www.youtube.com/embed/PLl99DlL6b4"
    },
  
    {
      id: uuidv4(),
      title: "The Hate U Give",
      description: "The Hate U Give is a 2018 American drama[4] film co-produced and directed by George Tillman Jr. ",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIbKGV3PC7gh0nwwUu7oQDsj1rc2X5Gw86Gw&usqp=CAU",
      rating: "5",
      trailer: "https://www.youtube.com/embed/3MM8OkVT0hw"
    },
  
    {
      id: uuidv4(),
      title: "Blue Story",
      description: "Blue Story is a 2019 British musical crime drama film written, directed, and narrated by Rapman (Andrew Onwubolu). ",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxJoS7TeI7Oik012VXl6610gd-WDn6sa-4w&usqp=CAU",
      rating: "4",
      trailer: "https://www.youtube.com/embed/9H7hy7jZII0"
    },
  
    {
      id: uuidv4(),
       title: "Captain Marvel",
       description: "Brie Larson as Carol Danvers / Vers / Captain Marvel: An ex-U.S. Air Force fighter pilot and member of an elite Kree military unit called Starforce. ",
       poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hm3jpoL8KMXEpc9Cww6lymKCO5ud8LJWsg&usqp=CAU",
       rating: "3",
       trailer: "https://www.youtube.com/embed/Z1BCujX3pw8"
    },
  
    {
       id: uuidv4(),
       title: "Spider-Man: Far From Home",
       description: "Spider-Man: Far From Home is a 2019 American superhero film based on the Marvel Comics character Spider-Man. ",
       poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfLbS3HDTXpDlnwaSK0j3-rZFZBudumcyzw&usqp=CAU" ,
       rating: "4",
       trailer: "https://www.youtube.com/embed/DYYtuKyMtY8"
    },
  
    {
       id: uuidv4(),
       title: "Alita: Battle Angel",
       description: "Alita: Battle Angel is a 2019 American cyberpunk action film based on Yukito Kishiro's manga series Gunnm. ",
       poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8dJz-wFSNtx0KncRBrA-oQ0FU3tXojbg4g&usqp=CAU" ,
       rating: "2",
       trailer: "https://www.youtube.com/embed/mkZsFiVQQsk"
    },
  
    {
      id: uuidv4(),
       title: "Spider-Man: Into the Spider-Verse",
       description: "Spider-Man: Into the Spider-Verse is a 2018 American computer-animated superhero film. ",
       poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZBf6TPymOoPEYAGcPPeKZl7O_36gfGPOAYQ&usqp=CAU" ,
       rating: "3",
       trailer: "https://www.youtube.com/embed/g4Hbz2jLxvQ"
    },
  ]);
  const [titleSearch, setTitleSearch] = useState("");
  
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleSearch.toLowerCase()) 
       
    );
    setFilteredMovies(filtered);
  }, [movies, titleSearch ]);

  return (
    <div className="App">
      <MyNav
        setMovies={setMovies}
        movies={movies}
        setTitleSearch={setTitleSearch}
       
      />

      <Routes>
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
      </Routes>
    </div>
  );
}

export default App;