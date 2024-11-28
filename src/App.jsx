import { useEffect, useState } from "react";
import Header from "./components/Header"
import MainTable from "./components/MainTable"
import { getRandomBooks } from "./service/books";

function App() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    setLoading(true);
    try {
      const { data } = await getRandomBooks();

      console.log(data);
      
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooks();
  }, [])
  

  return (
    <div>
      <Header />

      <div className="mt-5">
        <MainTable />
      </div>
    </div>
  )
};

export default App
