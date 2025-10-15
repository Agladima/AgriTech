// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../services/auth";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <button
        onClick={handleGoogleSignIn}
        style={{
          backgroundColor: "#1a73e8", // Google blue
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Continue with Google
      </button>
    </div>
  );
}
