import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { app } from "./firebase";
import "./App.css";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  // Signup with email/password
  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        setUser(userCredential.user);
        alert("Signup successful!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("This email is already registered. Please log in instead.");
        } else {
          alert(error.message);
        }
      });
  };

  // Login with email/password
  const loginUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User logged in:", userCredential.user);
        setUser(userCredential.user);
        alert("Login successful!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Login with Google
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google sign-in successful:", result.user);
        setUser(result.user);
        alert(`Welcome ${result.user.displayName}`);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Logout
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert("Logged out successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="App">
      <h1>Firebase React App</h1>

      {!user ? (
        <>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button onClick={signupUser}>Sign Up</button>
          <button onClick={loginUser}>Login</button>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </>
      ) : (
        <div>
          <p>Logged in as {user.displayName || user.email}</p>
          {user.photoURL && <img src={user.photoURL} alt="profile" />}
          <br />
          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;