import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterGate from 'routes/RouterGate'
import './App.scss'

function App() {
	return (
		<div className="App">
			<Router>
				<RouterGate />
			</Router>
		</div>
	)
}

export default App
