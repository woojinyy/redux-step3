import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import ReduxApp from './ReduxApp';
import AuthLogic from './service/authLogic'
import { setAuth } from './redux/userAuth/actions';
import firebaseApp from './service/firebase';
import { BrowserRouter } from 'react-router-dom';

//리덕스 적용하기
const store = legacy_createStore(rootReducer)//worker(state,action)
// auth객체 생성하기
const authLogic= new AuthLogic(firebaseApp);
//store에 있는 초기 상태
store.dispatch(setAuth(authLogic.getUserAuth(),authLogic.getGoogleAuthProvider()))
console.log(store.getState());//getState()함수를 통해 상태값 보기 state.js에있는 정보

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Provider store={store} >{/* props로 넘기기 */}
    <ReduxApp/>
   </Provider>
  </BrowserRouter>
  
  </>
);

