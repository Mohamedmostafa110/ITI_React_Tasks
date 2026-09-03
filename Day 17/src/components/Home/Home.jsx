import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Parent from "../Parent/Parent";

export default function Home() {
  let [counter, setCounter] = useState(0);
  let [userName, setUserName] = useState(`Ahmed`);
  let [fruits, setFruits] = useState([`Orange`, `Kiwi`, `Apple`]);
  let [user, setUser] = useState({ firstName: `Mohamed Mostafa`, age: 20 });

  function increase(param) {
    setCounter(counter + param);
  }

  console.log(`Render....`);

  return (
    <>
      <NavBar />
      <h1>Home</h1>
      <h3>UserName: {userName}</h3>
      <h3>User: {user.firstName}</h3>
      <div className={counter > 15 ? `bg-secondary` : `bg-primary`}>
        <h3>Counter: {counter}</h3>
        <ul>
          {fruits.map((fruit) => (
            <li>{fruit}</li>
          ))}
        </ul>
      </div>
      <button
        className="btn btn-info"
        onClick={function () {
          increase(3);
        }}
      >
        Increase Counter
      </button>
      <Hero />
      <About />
      <Parent />
      <Footer />
    </>
  );
}
