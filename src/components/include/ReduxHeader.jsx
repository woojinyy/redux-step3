import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux'
import { loginGoogle,logout } from '../../service/authLogic'

const ReduxHeader = () => {

  //store에 있는 userAuth 가져오기 =useSelector
  const{ userAuth }=useSelector((store)=>store)
  const [userId,setUserId]=useState()
  useEffect(()=>{
    //로컬에 담고 //state 훅에 담고
    setUserId(window.localStorage.getItem("userId"))
  },[])

  const handleGoogle=async()=>{
    //로그인 호출하기
    console.log('구글로그인호출')
    //인증에필요한 함수 authLogic.js -> loginGoogle 리덕스로 끌어오기
    //리덕스에서 가져오기 selector
  const result = await loginGoogle(userAuth.auth,userAuth.googleProvider)//auth,googlePorovider
    if(result.uid){
      //로컬 스토리지나 세션스토리지에 처리된 결과가 화면에 반영되려면 페이지 리로딩이 필요함
      //navigate훅으로 처리 안됨
      window.localStorage.setItem("userId",result.uid)
      window.location.reload()
    }
    console.log(result)
  }

  const handleLogout=()=>{
    logout(userAuth.auth)
      window.localStorage.removeItem("userId")
      window.location.reload()
  }

  return (
    <>

    <div className="sub_container">
   <h2>헤더섹션</h2>
   {userId?
   <button onClick={handleLogout}>Logout</button>://useid있으면 로그아웃
   <button onClick={handleGoogle}>Google</button>
   }
    </div>
    </>
  )
}

export default ReduxHeader
