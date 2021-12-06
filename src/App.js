
import './App.css';
import Welcome from './Welcome';


function App() {
  const handleName=(a)=>{
alert ("Hello "+a)
  }
  return (
    <div classname="App">
  <header classname="App-header">
    <div className="container">
      <div className="content">
        <h1>Haifa Rejeb 
          <img className="aa" style={{width: 50}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXAP8UTExepnlsbekTouGE71aMlNk1tlQDQ&usqp=CAU" /> </h1>
        <h3>Finance analyst and a full stack developer</h3>
      </div>
      <div className="flap" />
    </div> 
    <Welcome fullname="Haifa Rejeb" bio="..." profession="Finance analyst and a full stack developer" handleName={handleName}>
    </Welcome></header>
</div>

  );
}




export default App



