import { useState, useEffect } from 'react'

let renderCount = 1
export default function People({ url }) {

    const [ people, setPeople ] = useState()
    
    useEffect( () => {
        console.log( `People.js USEEFFECT# ${renderCount++}`)
        if ( url ) fetch( url ).then( r => r.json() )
            .then( (people) => {
                console.log( people.results )
                setPeople( people.results) 
            } )
    }, [ url ] )

    console.log( `People.js render# ${renderCount}`)
    return ( 
        <div>
            
        </div>
    )
}