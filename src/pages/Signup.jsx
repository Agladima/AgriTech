import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"; // make sure firebase.js is in src/

export default function Signup() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
      navigate("/dashboard"); // redirect after success (change to your desired page)
    } catch (error) {
      console.error("Google sign-in error:", error);
      alert("Google sign-in failed. Check console for details.");
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
        <h2 style={{ marginBottom: "8px", fontWeight: "600" }}>
          Sign up to get started
        </h2>
        <p style={{ marginBottom: "24px", color: "#555" }}>
          Existing user?{" "}
          <Link
            to="/login"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            Login
          </Link>
        </p>

        {/* Signup form */}
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            textAlign: "left",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Full Name */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Full Name</label>
            <input type="text" placeholder="John Doe" style={inputStyle} />
          </div>

          {/* Work Email */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Work Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              style={inputStyle}
            />
          </div>

          {/* Password */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={labelStyle}>Choose Password</label>
            <input
              type="password"
              placeholder="minimum of 8 characters"
              style={inputStyle}
            />
          </div>

          <button style={signupBtnStyle}>Sign up</button>
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

        {/* Footer */}
        <p style={{ marginTop: "20px", fontSize: "13px", color: "#888" }}>
          By continuing, you agree to our{" "}
          <span style={{ color: "#007bff", cursor: "pointer" }}>
            Terms of Service
          </span>{" "}
          and{" "}
          <span style={{ color: "#007bff", cursor: "pointer" }}>
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}

// Styles
const inputStyle = {
  padding: "12px 14px",
  borderRadius: "17px",
  border: "1px solid #ccc",
  fontSize: "15px",
  outline: "none",
};

const labelStyle = {
  marginBottom: "5px",
  fontWeight: "500",
  color: "#333",
  fontSize: "14px",
};

const signupBtnStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "12px 0",
  fontSize: "16px",
  borderRadius: "17px",
  cursor: "pointer",
};

const googleBtnStyle = {
  backgroundColor: "white",
  color: "#555",
  border: "1px solid #ccc",
  padding: "10px 0",
  width: "100%",
  fontSize: "16px",
  borderRadius: "17px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
