import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>El Estado de React - Hook useState</h1>
       <MiPrimerEstado />

{/* El año tiene que ser una prop del componente */}
       <EjercicioComponent year={2024}/>
      
      </header>
    </div>
  );
}

export default App;
