import { useState } from "react";

// Single item card component
function MarketCard({ name, type, description, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      margin: "10px",
      width: "250px", 
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      backgroundColor: "#f0f8f0",
      textAlign: "center"
    }}>
      {image && <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }} />}
      <h3>{name}</h3>
      <p><strong>Type:</strong> {type}</p>
      <p>{description}</p>
    </div>
  );
}

// Marketplace Section
function Market({ categoryName }) {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("sell");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Convert uploaded image to URL
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !description) return;

    const newItem = { name, type, description, image };
    setItems([...items, newItem]);

    // Reset form
    setName("");
    setType("sell");
    setDescription("");
    setImage(null);
    e.target.reset();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{categoryName} Market</h2>

      {/* Add Item Form */}
      <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder={`${categoryName} Name`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ marginRight: "10px", padding: "5px" }}>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
        </select>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "5px 10px" }}>Add</button>
      </form>

      {/* Display items */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items.map((item, index) => (
          <MarketCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Market;
