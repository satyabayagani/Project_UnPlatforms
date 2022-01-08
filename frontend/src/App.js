import './App.css';
import UserTemplate from './components/UserTemplate';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { action } from './store/redux';
import axios from 'axios';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get("http://localhost:3200/api/all")
      .then(res => {
        if (res.data.length === 0) {
          axios.post("http://localhost:3200/api/create")
          .then(res => dispatch(action.getData(res.data)))
          .catch(err => console.log("error in initialising data",err))
          
        }
        else
          {
            console.log(res.data)
            dispatch(action.getData(res.data))}
          if(res.data.comments!=0)
        axios.put("http://localhost:3200/api/update",
          {views:res.data[0].views+1,id:res.data[0].id})
        })
      .catch(err => console.log("error in loading data",err))
  },[dispatch])


  return (
    <div>
      <UserTemplate></UserTemplate>
    </div>
  );
}

export default App;
