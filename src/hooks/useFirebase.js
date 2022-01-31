import firebaseInitialize from "../Firebase/firebase.initialize"
import  { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,getIdToken, onAuthStateChanged,signOut,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider,updateProfile } from "firebase/auth";


firebaseInitialize()

const useFirebase=()=>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [Error,setError]=useState('')
    const [admin,setAdmin]=useState(false)
    const [token,setToken]=useState('')

    const signUpEmail=(email,password,name,history)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setError('')
    const newUser={email,displayName:name}
    setUser(newUser)
     saveUser(email,name,'POST')
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => { 
      }).catch((error) => {
      });
    history.replace('/')
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  }).finally(()=>setIsLoading(false));
    } 
    const signInGoogle=(location,history)=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    const user=result.user
    saveUser(user.email,user.displayName,'PUT')
    const destination=location?.state?.from || "/";
        history.replace(destination)
        setError('')
   
  }).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
    }
    const signIn=(email,password,location,history)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
        const destination=location?.state?.from || "/";
        history.replace(destination)
        setError('')
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  }).finally(()=>setIsLoading(false));
    }

const logOut=()=>{
    setIsLoading(true)
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
        setError(error.message)
    }).finally(()=>setIsLoading(false));
}
 const saveUser=(email,displayName,method)=>{
    const user={email,displayName}
    fetch('https://agile-dawn-10328.herokuapp.com/users',{
      method:method,
      headers:{
        "content-type":'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
 }
useEffect(()=>{
   
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
       getIdToken( user).then(idToken=>setToken(idToken))
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return ()=>unsubscribe;
},[auth])
useEffect(()=>{
  fetch(`https://agile-dawn-10328.herokuapp.com/users/${user.email}`)
  .then(res=>res.json())
  .then(data=>{setAdmin(data.admin)
  console.log("admin",data.admin)})
  
},[user.email])
 return{
     user,
     admin,
     token,
     isLoading,
     Error,
     signUpEmail,
     logOut,
     signIn,
     signInGoogle
 }
}
export default useFirebase