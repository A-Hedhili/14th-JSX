import logo from './logo.svg';
import './App.css';
import myimage from "./startup-desktop.jpg"

function App() {
  return (
    <div className="App">
     
     <div style={{border:'solid 1 black',maxWidth:'100vw'}}>

     <h1 class="title red">Amina Hedhili</h1>

<br/>

<img src={myimage} alt='startup-desktop' width={800} height={600} />
<br/>
<br/>

<img src="/money.jpg" width={800} height={600}/>
<br/>
</div>

<video width={320} height={240} controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>

    </div>
  );
}
export default App;
