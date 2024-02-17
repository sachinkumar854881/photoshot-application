import React from 'react'
import useFetch from './hook/useFetch';
import Card from './component/Card';
import {useState} from 'react'

function App(){
  const {data,error,loading} = useFetch('https://api.github.com/users');
  const [search,setSearch] = useState('')
  const filterUser = (e)=>{
    setSearch(e.target.value)
  }
  console.log(data)
  return(
    <div className="App">
      <div className="navbar">
        <input type="text" onChange={filterUser} placeholder="enter pic name"/>
      </div>
      <div className="container">
        {
          loading ? <h2>loading....</h2> : data.map((val) => {
            if(val.login.includes(search.toLowerCase()))
            return <Card data={val}/>
          })
        }
      </div>
    </div>
  );
}
export default App;