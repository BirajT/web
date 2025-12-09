import React from 'react'
import { useState } from "react";
import Child from "../components/child";
import { UserProfile } from "../components/user-profile";
const Home = () => {
      const [show , setShow] = useState(true)
  return (
      <div>
      <h1>Home Page</h1>
      <ul>
        <li>Component</li>
        <img src="/vite.svg" />
        <li>JSX</li>
        <li>Props</li>
        <li>Props drilling</li>
        <li>SPA - Single Page Application</li>
        <li>MPA - Multi Page Application</li>
        <li>Hooks: useState() , useEffect()</li>
        <li>DOM - Documeny Object Model</li>
        <li> Virtual DOM </li>
        <li>Diffing</li>
        <li>Reconciliation</li>
        <li>Component Lifecycle Methods</li>
        <li>1. componentDidMount - creation phase</li>
        <li>2. componentDidUpdate - updating phase</li>
        <li>3. componentWillUnmount - deleting phase</li>
        <li>Conditional Rendering</li>
        <li>Events</li>
        <li >click , change , hover , submit</li>
      </ul>
      {/* child a  -> clild b  ..... z */}
      <button onClick={() => { setShow((prev) => !prev) }}>toggle</button>
      
      {/* conditional rendering */}
      {/* {show ? <Child /> : null} */}
      {/* short circuiting */}
      {show && <Child /> }


      {/* <UserProfile /> */}
      <UserProfile user={{name:'Alice', email:'Alice@gmail.com', phone:'1234543',}} />
    </div>
  )
}

export default Home