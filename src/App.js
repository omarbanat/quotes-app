import { useEffect, useState } from 'react';
import './App.css';
import Quotes from './components/Quotes';

function App() {
  const [data, setData] = useState({});

  const fetchData = () => {
    fetch('https://api.quotable.io/quotes')
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="quotes">
      {data &&
        data.results &&
        data.results.map((quoteObj) => {
          return (
            <Quotes
              tags={quoteObj.tags}
              key={quoteObj._id}
              author={quoteObj.author}
              content={quoteObj.content}
            />
          );
        })}
    </div>
  );
}

export default App;
