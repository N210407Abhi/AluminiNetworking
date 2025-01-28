import React,{useState} from 'react'
import { Navbar } from '../components/Navbar'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import MainBody from '../components/MainBody'

export const Landingpage = () => {
  const[showLogin,setshowLogin] = useState(false)
  const [showNavbar,setshowNavbar] = useState(true)
  const [showSignUp,setshowSignUp] = useState(false)
  // const [showMainbody,setshowMainbody] = useState(false)
  const showLoginHandler =()=>{
    setshowNavbar(true)
    setshowLogin(true)
    setshowSignUp(false)
    setshowMainbody(false)

}
const showSignUpHandler = ()=>{
  setshowLogin(false)
  setshowNavbar(true)
  setshowSignUp(true)
  setshowMainbody(false)
}
// const showMainbodyhandler = ()=>{
//   setshowMainbody(true)
//   setshowNavbar(true)
//   setshowLogin(false)
//   setshowSignUp(false)
// }
  return (
    <div className='landingSection'>
        {showNavbar && <Navbar showLoginHandler = {showLoginHandler} showSignUpHandler = {showSignUpHandler} />}
        {showLogin && <Login/>}
        {showSignUp && <SignUp/>}
        <MainBody showLoginHandler={showLoginHandler}/>
    </div>
  )
}
