import React, { useState } from "react";
import MarketLayout from "./MarketLayout";
import ProductForm from "./Market/ProductForm";
import ProductCard from "./Market/ProductCard";

import img2 from "../assets/agrimachines-bg/img2.jpg";
import img3 from "../assets/agrimachines-bg/img3.jpg";
import img4 from "../assets/agrimachines-bg/img4.jpg";
import img5 from "../assets/agrimachines-bg/img5.jpg";
import img6 from "../assets/agrimachines-bg/img6.jpg";
import img7 from "../assets/agrimachines-bg/img7.jpg";

function AgriMachines() {
  const [openForm, setOpenForm] = useState(false);
  const [products, setProducts] = useState([]);

  const images = [img2, img3, img4, img5, img6, img7];

  return (
    <>
      <MarketLayout bgImages={images} interval={8000}>
  <div className={`market-content ${openForm ? "blur" : ""}`}>
    <h1>AgriMachines Marketplace</h1>
    <p>Explore all the agricultural machines here.</p>

    <button className="add-btn" onClick={() => setOpenForm(true)}>
      + Sell / Rent Product
    </button>

    <div className="card-grid">
      {products.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  </div>
</MarketLayout>

      {/* PRODUCT FORM MODAL */}
      {openForm && (
        <ProductForm
          onClose={() => setOpenForm(false)}
          onSave={(data) => {
            setProducts((prev) => [...prev, data]);
            setOpenForm(false);
          }}
        />
      )}
    </>
  );
}

export default AgriMachines;
