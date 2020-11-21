import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className="row">

          <div className="col">
            <Card name="Daniel" dogname="sora" titlecolor='red' cardimg="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F05%2FSHIBA.INU-Profile.png&w=512&h=512&c=sc&poi=face&q=85" />
          </div>

          <div className="col">
            <Card name="Ryan" />
          </div>

          <div className="col">
            <Card name="Nathan" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
