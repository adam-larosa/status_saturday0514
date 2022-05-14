
function DisplayNames({ allNames }) {

    const saveTheName = name => {
        console.log( 'can we save this', name, 'to a database?' )
    }


    const nameElements = allNames.map( (name, i) => 
        <div key={i}>
            { name }
            <button onClick={ () => saveTheName( name ) }>
                save
            </button>
        </div> 
    ) 
   
    return (
        <div>
            { nameElements }
        </div>
    )
}

export default DisplayNames