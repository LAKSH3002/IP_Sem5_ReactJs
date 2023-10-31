import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

// In React you can return only one element.
// babel Compiles JSX down to .createElement()

function App() 
{
  // Props Are Read Only in a web page.
  // Props are written inside the Navbar tag as shown below.
  return (
    <>
    <Navbar title="TextUtils" about="AboutText"/>
    <br></br>
    <div className="container my-3">
    <TextForm heading="Text Area for Text Manipulation."/>
    </div>
    
    </>
  );
}

export default App;
