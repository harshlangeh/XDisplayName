import './App.css';
import Title from './components/Title';
import MyForm from './components/Form';
import SubmitButton from './components/Button';

function App() {
  return (
    <div className="App">
      <Title text="Full Name Display"/>
      <MyForm/>
      <SubmitButton text="Submit"/>  
    </div>
  );
}

export default App;
