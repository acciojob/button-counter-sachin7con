//SGN
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
    const [count, setCount] = useState(0);

    const handleCount = (e) => {
      
      setCount(count + 1);
    }


  return (
    <div>
        {/*ONS  Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button type="button" onClick={handleCount}>Click me</button>

    </div>
  )
}

export default App
