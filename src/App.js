import './App.css';
import Header from './components/header/Header';
import MyForm from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Countdown</h1>
      <MyForm />
    </div>
  );
}

export default App;