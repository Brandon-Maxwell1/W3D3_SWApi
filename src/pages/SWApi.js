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
        <div className="cardBody">
            {starships.map((item) => (
                <div id="card" className="shipBody"  key={item.name}>                    
                    <div className="card-body">
                <h6 className="subtitle">MAKE: {item.manufacturer}</h6>
                <h7 className="title">MODEL: {item.model}</h7>                
                <p>CLASS: {item.starship_class}</p>    
                    </div>
        </div>
                  
            ))}

        </div>

    )

            }



export default SWApi;


