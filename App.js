import React,{useState} from 'react';
import './App.css';

function App() {

  const [weight,setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi]=useState('');
  const [message, setMessage] = useState('')

  let calcBmi = (event) =>{
    event.preventDefault()

  if(weight===0 || height===0 ){
    alert('please enter a valid weight and height')
  }
  else{
    let bmi = (weight / (height*height) * 703)
    setBmi(bmi.toFixed(1))

    if(bmi<25){
      setMessage('you are underweight')
    }
    else if(bmi>=25 && bmi <30){
      setMessage('you are healthy weight')
    }
    else{
      setMessage("you are overweight")
    }
  }

}

let reload = () => {
  window.location.reload()
}



  return (
    <div className="app">
      <div class="container">
          <h2 className='center'>BMI calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label >Weight(lbs)</label>
              <input 
              type="text" 
              placeholder="enter weight value" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              />
            </div>
           <div>
              <label>Height(in)</label>
              <input 
              type="text" 
              placeholder="enter height value" 
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              />
           </div>
           
            <button className="btn" type="submit" >Submit</button>
            <button  className="btn btn-outline" type="submit" onclick={reload} >Reload</button>
            <div className="center">
              <h3> your BMI is:{bmi}</h3>
              <p>{message}</p>
            </div>
            
          </form>
      </div>
    
    </div>
  );

  }
export default App;
