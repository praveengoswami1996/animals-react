import './App.css';
import { useState } from "react";
import AnimalShow from "./components/AnimalShow";

function getRandomAnimal(){
    const animals = ["cat", "dog", "cow", "gator", "horse", "bird"];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return <div className='App'>
        <button onClick={handleClick} className="btn">Add Animal</button>
        <div className="animals-container">
            {renderedAnimals}
        </div>
    </div>
}

export default App;