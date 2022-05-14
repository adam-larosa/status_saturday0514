import { useState } from 'react'



export default function NameForm({ updateNames }) {

    const [ name, setName ] = useState( '' )
    const handleChange = e => setName( e.target.value )
    
    const handleSubmit = event => {
        event.preventDefault()
        updateNames( name )
    } 

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input onChange={ handleChange } name='name' />
                <input type='submit' />
            </form>
        </div>
    )
}






