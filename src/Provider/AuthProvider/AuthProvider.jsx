import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import useAxiosPublic from "../../Hook/useAxiosPublic";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [tirger, setTriger] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [updatePrice, setUpdatePrice] = useState();
  const [updateLimit, setUpdateLimit] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [changeDashboardAndShop, setChangeDashboardAndShop] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const SignInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      console.log("current user", currentUser);
      if (currentUser) {
        const userInfo = {
          email: currentUser.email,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setUser(currentUser);
            setLoading(false);
         
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);




  useEffect(() => {
    async function fetchDataFromServer() {
      try {
        const response = await fetch(
          `http://localhost:5000/singleUser/${user?.email}`
        );
        const data = await response.json();
        setChangeDashboardAndShop(data.crateShop);
        setIsAdmin(data.roll);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchDataFromServer();
  }, [setIsAdmin, user]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    SignInGoogle,
    userData,
    setUserData,
    tirger,
    setTriger,
    updatePrice,
    setUpdatePrice,
    updateLimit,
    setUpdateLimit,
    isAdmin, 
    changeDashboardAndShop
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
