import './stylesheets/App.css';

import NameForm from './components/NameForm'
import DisplayNames from './components/DisplayNames'



function App() {
	return (
		<div className="cool">
			<NameForm />
			<DisplayNames />
		</div>
	);
}

export default App;
