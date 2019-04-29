import React, { useState, useEffect } from 'react';

function Home() {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('redux');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
        if (!response.ok) {
          throw new Error('Response not ok');
        }
        const data = await response.json();
        setHits(data.hits);
      }catch(e) {
        setIsError(true);
      }
    };
    fetchData();
  }, [query]);

  function handleOnChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
  }

  return (
    <>
      <input type="text" value={query} onChange={handleOnChange} />
      { isError && <h1> something is wrong </h1> }
      {
        !isError && <ul>
        {
          hits.map((item, index) => <li key={index}>{item.title}</li>)
        }
        </ul>
      }
    </>
  )
}

export default Home;
