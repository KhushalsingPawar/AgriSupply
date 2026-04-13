import { useState } from "react";
import "./Login.css";

function Login({ onClose, setLoggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill all fields!");
      return;
    }

    setLoading(true);

    fetch("http://localhost:8080/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
})
.then(res => res.json())
.then(data => {
    console.log("Login response:", data); // works
    setLoading(false);

    if (data && data.role) {
        setMessage("Login successful!");
        localStorage.setItem("user", JSON.stringify(data));
        // setLoggedInUser(data);  <- THIS IS COMMENTED
        setTimeout(() => {
        onClose();
    }, 1000); // 1 second
    } else {
        setMessage(data.message || "Invalid credentials");
    }
})
.catch(err => {
    console.error("Login fetch error:", err);
    setMessage("Server error");
    setLoading(false);
});

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && (
        <p className={`msg ${message.includes("successful") ? "success" : "error"}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
