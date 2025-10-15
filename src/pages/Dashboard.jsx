// src/pages/Dashboard.jsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { logout } from "../services/auth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <img
        src={user?.photoURL}
        alt={user?.displayName}
        style={{ borderRadius: "50%", width: 100, height: 100 }}
      />
      <h2 style={{ marginTop: "20px" }}>Welcome, {user?.displayName} 👋</h2>
      <p style={{ color: "#555" }}>{user?.email}</p>

      <button
        onClick={logout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#ef4444",
          color: "white",
          cursor: "pointer",
        }}
      >
        Sign out
      </button>
    </div>
  );
}
