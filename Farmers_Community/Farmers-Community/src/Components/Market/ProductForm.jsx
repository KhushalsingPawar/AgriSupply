import { useState } from "react";
import "./ProductForm.css";

function ProductForm({ onClose, onSave }) {
  const [data, setData] = useState({
    image: "",
    name: "",
    description: "",
    type: "sell",
    price: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setData({
      ...data,
      image: URL.createObjectURL(e.target.files[0])
    });
  };

  const submit = (e) => {
    e.preventDefault();
    onSave(data);
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={submit}>
        <h2>Add Product</h2>
        <input type="file" onChange={handleImage} required />
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <select name="type" onChange={handleChange}>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
        </select>
        <input name="price" type="number" placeholder="Price" onChange={handleChange} />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default ProductForm;
