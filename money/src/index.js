import React from 'react'
import ReactDOM from 'react-dom'
// import './css/normalize.css'
import './css/style.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.querySelector('#root'))
registerServiceWorker()
