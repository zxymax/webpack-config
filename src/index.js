import { render } from 'react-dom'
import App from './components/App'
import './styles/index.css'

render(<App />, document.getElementById('root'))

const obj = {
  strips: 2,
  iron: 1,
  tone: 4
}

console.log(obj)
