import './App.css'
import { UserProfile } from './components/user-profile'
import { multiply } from './components/user-profile'

function App() {
  return (
    <div>
      <h1>Hello World </h1>
      <ul>
        <li>Components</li>
        <img src="/vite.svg" alt="" />
        <li>JSX</li>
        <li>Props</li>
      </ul>
      <UserProfile user={{name:'john' ,email:'john@gmail.com',phoneno:'9841070000'}} />
      <UserProfile user={{name:'Alice',email:'alice@gmail.com'}}/>
      <multiply mul={{}} />
    </div>
  )
}



export default App
