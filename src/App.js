import './stylesheets/App.css';

import NameForm from './components/NameForm'
import DisplayNames from './components/DisplayNames'

import { useState } from 'react'

function App() {

	const [ namesArray, setNamesArray ] = useState( [] )
	const updateNames = (theNewName) => 
		setNamesArray( [...namesArray, theNewName ] )
	

	return (
		<div className="cool">
			
			<NameForm updateNames={updateNames} /> 
			
			<DisplayNames allNames={namesArray} /> 
		
		</div>
	);
}

export default App;
