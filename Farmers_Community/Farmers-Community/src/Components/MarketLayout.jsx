import React, { useState, useEffect } from "react";
import "./MarketLayout.css";

function MarketLayout({ bgImages, children, interval = 10000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!bgImages || bgImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [bgImages, interval]);

  return (
    <div
      className="market-container"
      style={{ backgroundImage: `url(${bgImages[current]})` }}
    >
      <div className="market-content">{children}</div>
    </div>
  );
}

export default MarketLayout;
