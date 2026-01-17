import logo from './logo.svg';
import "milligram"
import './App.css';
import {useState} from "react";
function App() {
    const [title, setTitle] = useState('');
    const [yearx, setYearx] = useState('');
    const [h3, setH3] = useState('Add title longer than 3 characters');
    const [movies, setMovies] = useState([
    ]);
    function handleChange(event) {
        //console.log(event.target.value);
        setTitle(event.target.value);
        if(event.target.value.length <= 3){
            setH3("Title must have 4 or more characters!");
        } else {
            setH3("Title is ok");
        }
    }
    function handleYearx(event) {setYearx(event.target.value);}

    function handleClick() {
        if(title.length <= 3){
            alert("Title must have 4 or more characters!");
            return;
        } 
        else if(yearx.length !== 4 || isNaN(yearx)){
            alert("Year must have 4 digits!");
            return;
        } else {
        setMoviesList();
        }
    }
    function setMoviesList() {setMovies([...movies, {title: `${title} (${yearx})`}]);}
    
    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <ul>
              {movies.map((movie)=> <li key={movie.title}>{movie.title}</li>)}
            </ul>

            <div id='contt'>
            <h3>Title</h3>
            <input type="text" onChange={handleChange} value={title}/>
            <br/>
            <text>{h3}</text>
            <h3>Year</h3>
            <input type="text" onChange={handleYearx} value={yearx}/> <br></br>
            <input type="button" onClick={handleClick} value={"Add record"}/>
            </div>
        </div>
    );
}

export default App;
