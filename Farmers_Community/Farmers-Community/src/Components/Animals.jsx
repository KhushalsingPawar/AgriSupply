import React from "react";
import MarketLayout from "./MarketLayout";

import img1 from "../assets/animals-bg/img1.jpg";
import img2 from "../assets/animals-bg/img2.jpg";
import img3 from "../assets/animals-bg/img3.jpg";
import img4 from "../assets/animals-bg/img4.jpg";
import img5 from "../assets/animals-bg/img5.jpg";

function Animals() {
  const images = [img1,img2,img3,img4,img5];

  return (
    <MarketLayout bgImages={images} interval={8000}>
      <h1>Animals Marketplace</h1>
      <p>Explore all the Animals here.</p>
    </MarketLayout>
  );
}

export default Animals;
