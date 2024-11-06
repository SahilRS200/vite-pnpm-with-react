// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { doLogout, getLoginStatus, updateCount } from './store/actions/mockActions';

function App() {
  const dispatch = useDispatch();
  const { count, isLoggedIn, loading } = useSelector((state: any) => state.dummy)

  const updateCounterCount = () => {
    const newCount = count + 1;
    dispatch(updateCount({count: newCount}))
  }
  const resetCounterCount = () => {
    dispatch(updateCount({count: 0}))
  }

  const doLogin = () => {
    if(isLoggedIn) {
      return dispatch(doLogout())
    }
    dispatch(getLoginStatus())
  }

  return (
    <>
      <div className="card">
        <button onClick={updateCounterCount}>
          count is {count}
        </button> &nbsp;
        <a onClick={resetCounterCount} >Reset</a>
        <br /><br /><br />
        {isLoggedIn ? <h6> Logged In</h6> : <h5>Not Logged in</h5>}

        <button onClick={doLogin} disabled={loading}> {loading? 'Loading' : isLoggedIn? 'Logout' : 'Login'} </button>
      </div>
    </>
  )
}

export default App
