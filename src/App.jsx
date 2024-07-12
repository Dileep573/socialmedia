
import './App.css'
import Header from"./component/Header"
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'
import Createpost from './component/createpost'
import PostList from './component/PostList'
import { useState } from 'react'
import Pass from "./component/password"




export default function App() {
  
const [selectedTab, setSelectedTab]  = useState ("Home");
  return (

<>
    <h1>SOCIAL MEDIA PROJECT !</h1>
<div className= "App-container">
    <Sidebar selectedTab ={ selectedTab}  setSelectedTab =  {setSelectedTab}></Sidebar>
    

    <div className='content-container'>
    <Header></Header>

  {selectedTab === "Home" ? <PostList></PostList>:<Createpost> </Createpost>}

 
  <Pass></Pass>
 
 
   <Footer></Footer>
   </div>
   </div>
  

</>
  )
}
