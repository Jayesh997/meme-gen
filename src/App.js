import React, {useState} from "react"
// components import
import {Navbar} from "./components/Navbar"
import {Loader} from "./components/Loader"
import {Meme} from "./components/Meme"
// asset import
import {HeData} from './assets/HeData'
import {SheData} from './assets/SheData'
import {images} from './assets/images'

// css import
import "./components/Form.css"

function App() {
  const [memeImage, setMemeImage] = useState(images[0])
  const [caption, setCaption] = useState('')
  const [name, setName] = useState('')
  const [proposition, setProposition] = useState('he')

  // const [isName, setIsName] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  const shuffleIndex = ()=>{
  
  let index1 = Math.floor(Math.random()*images.length)
  let index2 =Math.floor(Math.random()*HeData.length)
    if(HeData[index2]=== caption){
      index2+=1;
    }
    if(images[index1]=== memeImage){
      index1+=1;
    }

    if(proposition ==="she"){
      setCaption(SheData[index2]);
    }else{
      setCaption(HeData[index2]);
    }
  setMemeImage(images[index1]);
}

  const assignName=(e)=>{
  e.preventDefault()
  // setIsName(true);
  setIsLoading(false)
  shuffleIndex()

  // console.log('yes')
}

  return (
    <div className="App">
      <Navbar></Navbar>
      {isLoading?<Loader></Loader>:<Meme memeImage= {memeImage} name={name} caption={caption} proposition={proposition}></Meme >}
      
      
      <div className="form-container">
            <form className="form" onSubmit={assignName}>
                {/* Name input */}
                {/* <label id="name" name="name" className="form-lable">Enter a Name</label> */}
                <input type="text" placeholder="Enter a Name" id="name" name= "name" className="form-input" value = {name} onChange={(e)=>setName(e.target.value)} ></input>  
                {/* radio button */}
                <label className="form-radio"><input name="gender" type="radio" value={proposition} onClick={()=>setProposition("he")} /><span>Male</span></label>
                <label className="form-radio"><input name="gender" type="radio" value={proposition} onClick={()=>setProposition("she")} /><span>Female</span></label>
                {/* submit button */}
                <button className="btn" type="submit" className="btn">Submit</button>
              </form>
              <button className="btn" onClick={()=>shuffleIndex()} >Generate Meme</button>
            
        </div>
    </div>
  );
}

export default App;
