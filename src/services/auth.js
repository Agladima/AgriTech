// src/services/auth.js
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // Save or update user in Firestore
    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        provider: "google",
        lastSeen: serverTimestamp(),
      },
      { merge: true }
    );
    return user;
  } catch (err) {
    console.error("Google sign-in error:", err);
    throw err;
  }
}

export async function logout() {
  await signOut(auth);
}
