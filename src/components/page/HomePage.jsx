import React, { useEffect } from 'react'
import ReduxHeader from '../include/ReduxHeader' 
import ReduxFooter from '../include/ReduxFooter' 
import { useDispatch, useSelector } from 'react-redux'
import Toast from '../Toast'
import { setToastMsg } from '../../redux/toastStatus/action'
const HomePage = () => {
  const status = useSelector(store=>store.toastStatus.status)
  console.log(status)
  const dispatch=useDispatch()
  useEffect(()=>{
    const userId=localStorage.getItem("userId")
    console.log(userId)
    if(userId!==null&&userId.length>0){
      dispatch(setToastMsg('로그인되었습니다.'))//setToastMsg가 호출 되면 false가 true로 바뀐다 reducer에서 해준다
    }else{

      dispatch(setToastMsg('로그인 후 이용가능합니다.'))
    }

  },[])
  return (
    <>
        <ReduxHeader/>
        <div className="container">
          {status&&<Toast/>}{/* status가 트루이면 Toast 실행 */}
            HomePage
        </div>
        <ReduxFooter />
    </>
  )
}

export default HomePage
