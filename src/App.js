import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Test from './Test';
import Test2 from './Test2'

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Main/>
        <Footer/>
        <Test />
        <Test2/>
      </div>
    </div>
  );
};

export default App;
