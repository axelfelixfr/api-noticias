import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ListNews } from './components/ListNews';
import { Form } from './components/Form';

function App() {
  // Definir la categoría y noticias
  const [searchCategory, setSearchCategory] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${searchCategory}&apiKey=${apiKey}`;
      const res = await fetch(url);
      const { articles } = await res.json();

      setNews(articles);
    };

    consultAPI();
  }, [searchCategory]);

  return (
    <>
      <Header title="Buscador de noticias" />

      <div className="container white">
        <Form setSearchCategory={setSearchCategory} />

        <ListNews news={news} />
      </div>
    </>
  );
}

export default App;
