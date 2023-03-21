import './App.css';
import Rlogo from './Images/R-logo.png';
import Glogo from './Images/G-logo.png';
import Flogo from './Images/F-logo.png';
import Tlogo from './Images/T-logo.png';



function App() {
  
  const submit = (e)=>{
    e.preventDefault()
    alert("Form Submitted")
    
  }

  return (
    <div className="App">
      
        <img src={Rlogo} className="rlogo" alt='logo'/>
      
      <p className='txt'>SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
      <div className='loginsignup'>
        <p className='login'>Login</p>
        <p className='signup'>Signup</p>
      </div>
      
      <hr className='line' />
      <form className='logininput' onSubmit={submit}>        
          <input placeholder='Email Address'  type="email" className='emailinput'></input>    
          <input placeholder='Password' type="password" className='passwordinput'></input> 
          <button className='loginbtn' >Login </button>        
      </form>

      <div className='forgot'>
        <p className='forgotpswd'>Forgot Password?</p>
      <p className='loginwith'>or login with</p> 
      </div>

      <div className='social'>
        <img src={Glogo} className='socialimg' alt='logo'/>
        <img src={Flogo} className='socialimg' alt='logo'/>
        <img src={Tlogo} className='socialimg' alt='logo'/>
      </div>

      <div className='footer'>
        <p className='footertxt1'>Don't have an account? <span className='newaccount'>Create new now!</span></p>
      <p className='footertxt2'>By signing up, you are agree with our <span className='newaccount'><u>Terms & Conditions</u></span></p>
      </div>

    </div>
  );
}

export default App;
