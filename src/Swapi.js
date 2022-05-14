import { useState, useEffect } from 'react'
import People from './People'

let renderCount = 1
export default function Swapi() {

    const [swapi, setSwapi ] = useState( {} )

    useEffect( () => {
        console.log( `Swapi.js USEEFFECT# ${renderCount++}`)
        fetch( 'https://swapi.dev/api' )
            .then( r => r.json() )
            .then( setSwapi )
    }, [])

    console.log( `Swapi.js render# ${renderCount}`)
    return (
        <div className='cool'>
            can we star wars api?
            <People url={swapi.people} />
        </div>
    )
}
