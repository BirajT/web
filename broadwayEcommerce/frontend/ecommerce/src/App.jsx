import './App.css'
import { UserProfile } from './components/user-profile.jsx'
import { Multiply } from './components/user-profile.jsx'

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
      <multiply mul={{no:'2',i:''}} />
    </div>
  )
}

function Mul()
{
  for( let i=0;i<=10;i++)
    m=2*i
  return(
    <div>
      
      <multiply mul={{no:2,n:i,soln:m}}/>
    </div>
  )
}



export default App
