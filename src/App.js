import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
    const [title, setTitle] = useState('Fight Club');
    const [h3, setH3] = useState('Wpisz coś czarodzieju');
    function handleChange(event) {
        //console.log(event.target.value);
        setTitle(event.target.value);
        if(event.target.value.length <= 3){
            setH3("Tytul ma mniej niż 3 znaki");
        } else {
            setH3("Tytul jest daijobu");
        }
    }


    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>

            <h3>{h3}</h3>
            <input type="text" onChange={handleChange} value={title}/>
        </div>
    );
}

export default App;
