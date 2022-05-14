import { useState } from 'react'



export default function NameForm() {

    const [ name, setName ] = useState( '' )
    const handleChange = e => setName( e.target.value )
    
    
    const handleSubmit = event => {
        event.preventDefault()
        // can we put the names somewhere else?
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






