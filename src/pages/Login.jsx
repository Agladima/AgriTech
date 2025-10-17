import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User logged in:", result.user);
      navigate("/dashboard"); // redirect after login
    } catch (error) {
      console.error("Google sign-in error:", error);
      alert("Google login failed. Check console for details.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7f9fc",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "25px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          width: "420px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "8px", fontWeight: "600" }}>Welcome back</h2>
        <p style={{ marginBottom: "24px", color: "#555" }}>
          New here?{" "}
          <Link
            to="/signup"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Create an account
          </Link>
        </p>

        {/* Login form */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            textAlign: "left",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              style={inputStyle}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Password</label>
            <input type="password" placeholder="••••••••" style={inputStyle} />
          </div>

          <button style={loginBtnStyle}>Login</button>
        </form>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <hr
            style={{ flex: 1, border: "none", borderTop: "1px solid #ccc" }}
          />
          <span style={{ margin: "0 10px", color: "#777" }}>or</span>
          <hr
            style={{ flex: 1, border: "none", borderTop: "1px solid #ccc" }}
          />
        </div>

        {/* Google button */}
        <button onClick={handleGoogleSignIn} style={googleBtnStyle}>
          <FcGoogle style={{ marginRight: "8px" }} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

// Styles
const labelStyle = {
  marginBottom: "5px",
  fontWeight: "500",
  color: "#333",
  fontSize: "14px",
};

const inputStyle = {
  padding: "12px 14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outline: "none",
};

const loginBtnStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "12px 0",
  fontSize: "16px",
  borderRadius: "6px",
  cursor: "pointer",
};

const googleBtnStyle = {
  backgroundColor: "white",
  color: "#555",
  border: "1px solid #ccc",
  padding: "10px 0",
  width: "100%",
  fontSize: "16px",
  borderRadius: "6px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
