import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
    const [title, setTitle] = useState('Fight Club');
    const [h3, setH3] = useState('Wpisz coś czarodzieju');
    const [movies, setMovies] = useState([
        {title: "Wall-E"},
        {title: "Pulp Fiction"},
        {title: "Matrix"},
        {title: "1670"}
    ]);
    function handleChange(event) {
        //console.log(event.target.value);
        setTitle(event.target.value);
        if(event.target.value.length <= 3){
            setH3("Tytul ma mniej niż 3 znaki");
        } else {
            setH3("Tytul jest daijobu");
        }
    }
    function handleClick() {
        alert(title);
        setMoviesList();
    }
    function setMoviesList() {
      setMovies([...movies, {title: title}]);
    }
    
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h3>Titles</h3>
            <ul>
              {movies.map((movie)=> <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            <h4>{h3}</h4>
            <input type="text" onChange={handleChange} value={title}/>
            <input type="button" onClick={handleClick} value={"Kliknij nie wstydz się"}/>
            
        </div>
    );
}

export default App;
