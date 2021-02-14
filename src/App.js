import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Feed from "./components/feed/Feed";
import Header from "./components/headers/Header";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./components/server/firebase";
import { useEffect } from "react";
import Widget from "./components/widget/Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
