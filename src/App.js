import React, {useEffect, useState} from 'react';
import Header from './components/Ui/Header';
import Grid from './components/characters/grid';
import Search from './components/Ui/search';
import axios from 'axios';
import './App.css';

function App() {
  
  const[items, setItems] = useState([]);
  const[load, isloading] = useState(true);
  const[query, setQuery] = useState('');

  useEffect(()=>{
      const fetchItems = async() => {
          const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`);

          console.log(result.data);
          setItems(result.data);
          isloading(false);
      }
      fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
      <Grid isloading={load} result={items}/>  
    </div>
  );
}

export default App;
