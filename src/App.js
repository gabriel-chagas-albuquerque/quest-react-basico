import TransformaTexto from './components/transforma-texto/transforma-texto'
import Button from './components/button/button'
import './App.css';


function App() {
  return (
    <>
    <TransformaTexto text='Essa é a minha Quest de React básico' textColor='crimson'/>
    <Button label='LIKE'/>
    </>  
  );
}

export default App;
