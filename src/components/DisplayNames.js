
import { useState, useEffect } from 'react'

function DisplayNames({ allNames }) {
    const [ savedNames, setSavedNames ] = useState( [] )

    const saveTheName = name => {
        /*  we need to send a request!  but which one?
            GET - "get" the info, or "read" it
            POST - "post" the info, or "create" something new
            PATCH - "patch" something already there, or "update" it
            DELETE - "delete" the resource */

        fetch( "http://localhost:3000/names", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { name } )
        } )
            .then( resp => resp.json() )
            .then( newNameObj => {
                setSavedNames( [ ...savedNames, newNameObj ] )
            } )
    }

    const nameElements = allNames.map( (name, i) => 
        <div key={`newname-${i}`}>
            { name }
            <button onClick={ () => saveTheName( name ) }>
                save
            </button>
        </div> 
    ) 

    const savedElements = savedNames.map( (nameObj, i) => {
        return <div key={`saved-${i}`}>
            { nameObj.name }
        </div>
    } ) 

    useEffect( () => {
        fetch( 'http://localhost:3000/names' )
            .then( resp => resp.json() )
            .then( savedNamesArray => {
                setSavedNames( savedNamesArray )
            } )
    }, [] )
   
    return (
        <div>
            <h3>new names:</h3>
            { nameElements }

            <h3>saved names:</h3>
            { savedElements }
        </div>
    )
}

export default DisplayNames