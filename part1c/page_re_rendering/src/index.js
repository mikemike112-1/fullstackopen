import ReactDOM from 'react-dom'
import App from './App'

let counter = 1

const refresh = () => {
ReactDOM.render(
  <App />, 
  document.getElementById('root'))
}
