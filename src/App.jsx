import { useEffect, useState } from "react";
import Header from "./components/Header"
import MainTable from "./components/MainTable"
import InfiniteTable from "./components/InfiniteTable2";
import { getRandomBooks } from "./service/books";

function App() {
  const [books, setBooks] = useState([]);
  // Variables Header
  const [language,setLanguage] = useState("En-US")
  const [seed,setSeed] = useState(0)
  const [likes,setLikes] = useState(0)
  const [reviews,setReviews] = useState(0)


  // HandleActions
  function handleRandomSeed() {
    setSeed(Math.floor(Math.random() * 100001));
  }

  return (
    <div>
      <Header
        language={language}
        setLanguage={setLanguage}
        seed={seed}
        setSeed={setSeed}
        likes={likes}
        setLikes={setLikes}
        reviews={reviews}
        setReviews={setReviews}
      
      handleRandomSeed={handleRandomSeed}/>
      <div className="flex items-center justify-center pt-6">
        <MainTable seed={seed} />
        {/* <InfiniteTable></InfiniteTable> */}
      </div>
    </div>
  )
};

export default App
