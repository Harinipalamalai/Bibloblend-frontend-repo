import './delete.css';


import react ,{useState}from "react";
import axios from "axios";

function Del() {
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/delete/'+search)
            .then( document.getElementById("dels").innerHTML = "deleted")
            .catch(err=>console.log(err))
        }
    }
  return (
    <>
            <div className="row2">
                <h2 id="dels">Delete Book</h2>
                <br></br><br></br><br></br>
                <div className="search" >
                    <input type="text" placeholder="enter"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                   
                    
                </div>
              </div>
        </>
  )
}

export default Del;