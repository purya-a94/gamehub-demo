import React from 'react'
import ReactDOM from 'react-dom'
import { store } from 'app/redux/store'
import { Provider } from 'react-redux'
import App from './App'
// Bootstrap stylesheet requirement (RTL version loaded directly inside index.html)
// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
