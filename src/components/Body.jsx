import { useEffect, useState } from 'react'
import axios from 'axios'


const Body = () => {
const [data,setData] = useState([]);
const [input,setInput] = useState('');
useEffect(()=>{
    fun();
},[])

async function fun(){
   try {
    let apiRes = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)

    setData(apiRes.data.items);

   } catch (error) {
    console.log(error)
   }
    
    console.log(input);
    console.log(data);
}
const handileForm = (e) => {
    e.preventDefault();
    fun();
}
const handileSubmit = () =>{
    input == '' ? alert('Enter somthimg to search'):''
}
  return (
    <>
    <div className='mainContent'>
        <div className="head">

        <form  onClick={handileForm} className='form'>
            <input type="text" 
        placeholder='Search Books here' 
        className='input' 
        onChange={(e) => setInput(e.target.value)}
        />

        <button className='btn' onClick={handileSubmit}>Submit</button>
        </form>
        </div>
        <div className="body">
           {data.map(i => 
           <div className='box'>
                 <img src={i.volumeInfo.imageLinks.thumbnail} alt="" className='img'/>
                 <h3>{i.volumeInfo.title}</h3>
                <p className='auth'>Authors : </p>
                 {i.volumeInfo.authors.map(a => <span>{a}, </span>)}

           </div>
            )}
            
        </div>
        <p align="center">Copy Right ©️ Akhilesh 😅</p>
    </div>
    </>
    
  )
}

export default Body;