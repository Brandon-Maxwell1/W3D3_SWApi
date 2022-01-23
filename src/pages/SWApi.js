import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import ShipDisplay from '../components/ShipDisplay';

const SWApi = () => {

    const [starships, setStarships] = useState([])
    // const [id, setId] = useState('')
    // const [schema, setSchema] = useState('')

    const getShip = async () => {
        try {
            const response = await axios.get("https://swapi.dev/api/starships/")
            setStarships(response.data.results)
            // console.log(response.data.results)
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getShip();
    }, []);

    { console.log('state', starships) }
    return (
        <div className="columns is-flex-wrap-wrap is-justify-content-center is-mobile cardBody">
            {starships.map((item) => (
                <div id="card" className="card is-one-fifth shipBody"  key={item.name}>                    
                    <div className="card-body">
                <h3 className="subtitle is-4">MAKE: {item.manufacturer}</h3>
                <h5 className="title is-4 is-spaced">MODEL: {item.model}</h5>                
                <p>CLASS: {item.starship_class}</p>    
                    </div>
        </div>
                  
            ))}

        </div>

    )

            }



export default SWApi;


