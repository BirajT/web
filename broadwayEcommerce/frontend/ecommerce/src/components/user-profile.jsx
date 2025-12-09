import { useState } from "react";

export const UserProfile = () => {

  // const input = ''
  const [value , setValue] = useState('')
  // const {name , email} = props
  console.log('user profile changes')

  const onEdit = () => {
    alert(`input value ${value}`)

    console.log(`input value ${value}`)
  }

  const onChange = (e) => {
    console.log(e.target.value)
    setValue(e.target.value)

  }

  return (
    <>
      <div>
        <p>name:{ '-'}</p>
        <p>email:{ '-'  }</p>
        <p>phone:{'-'}</p>
        <input type="text" onChange={onChange} />
        <input onChange={(e)=>{console.log(e.target.value)}} type="number"/>
        <input type="file"/>
        <input type="radio" />
        <input type="submit" />
        <input type="range" />
        <input type="checkbox" />
        <input onChange={(e)=>{console.log(e.target.value)}} type="color" />
        <input type="date" />
        <input type="time" />
        <input type="datetime-local" />
        <input type="week" />
        
        <button onClick={onEdit}>Edit</button>
      </div>
    </>
  );
};