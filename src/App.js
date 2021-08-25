import { useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';

function App() {
  // Definir la categoría y noticias
  const [searchCategory, setSearchCategory] = useState('');

  return (
    <>
      <Header title="Buscador de noticias" />

      <div className="container white">
        <Formulario setSearchCategory={setSearchCategory} />
      </div>
    </>
  );
}

export default App;
