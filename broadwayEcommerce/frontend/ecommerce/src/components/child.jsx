import React, { useEffect, useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0);
  console.log("child changes");

  //! componentDidMount
  useEffect(() => {
    // fetch
    console.log('Mounting')
  }, [])
  
  //! componentDidUpdate
  useEffect(() => {
    // fetch
    console.log('Updating')
  }, [count])
  
  useEffect(() => {
    // fetch
    console.log('Mounting')

  //! componentWillUnmount
    // cleanup
    // unmounting
    return () => {
      console.log('unmounting')
    }

  }, [])


  return (
    <div>
      <p>count:{count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Child;