import {useEffect, useState} from "react";
//or use the Import function
import Import from "@reejs/imports";
let confetti = await Import("https://esm.sh/canvas-confetti@1.6.0");

export default function App() {
  "hydrate" // currently reejs uses this way to hydrate the app. This will be removed after the introduction of Islands.
  const [count, setCount] = useState(0);

  useEffect(() => {
    confetti({
      particleCount: count,
      spread: 70,
      origin: { y: 0.6 }
    }, {
      resize: true
    });
  }, []);

  return (
    <div>
      <h1>Hello, Ree.js!</h1>
      <button onClick={()=>{setCount(count++)}}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
