import React, { useState, useEffect } from "react";
import "./Home.css";

import img1 from "../assets/pexels-n-voitkevich-5425893.jpg";
import img2 from "../assets/pexels-pixabay-221125.jpg";
import img3 from "../assets/pexels-einfoto-2291039.jpg";
import img4 from "../assets/pexels-matthiaszomer-325257.jpg";
import img5 from "../assets/pexels-livier-garcia-645743-1459331.jpg";
import img6 from "../assets/pexels-enginakyurt-1769279.jpg";
import img7 from "../assets/pexels-pixabay-207247.jpg";
import img9 from "../assets/pexels-souvenirpixels-1542495.jpg";
import img10 from "../assets/pexels-tahir-shaw-50609-205410.jpg";
import img11 from "../assets/pexels-quang-nguyen-vinh-222549-2132051.jpg";

function Home() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img11];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000); // 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div
        className="bg-fixed"
        style={{ backgroundImage: `url(${images[current]})` }}
      ></div>
      <div className="overlay">
        <h1>Welcome to Agriculture Portal</h1>
        <p>Login or Signup to explore</p>
      </div>
    </div>
  );
}

export default Home;
