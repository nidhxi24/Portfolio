import "./App.css";
import MainComp from './MainComp'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="content-boby">
          <MainComp />
        </div>
      </div>
    </>
  );
}

export default App;
