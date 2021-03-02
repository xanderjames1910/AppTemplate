import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// CSS Imports
import './App.css';
import './App-desktop.css';
import './App-mobile.css';

// Routes Imports
import Routes from './routes/Routes';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Routes />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
