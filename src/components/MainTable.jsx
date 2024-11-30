import { Accordion, AccordionItem } from "@nextui-org/react";
import { div } from "framer-motion/client";
import React from "react";
import { useEffect, useState } from "react";

function MainTable({ seed }) {
  // Infite Books
  const [dataBooks, setDataBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Get Books

  const fetchBooks = async (number) => {
    setLoading(true);
    try {
      fetch("https://1k6ckr9w-5000.usw3.devtunnels.ms/api/random-books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: number,
          seed: seed,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error getting data");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Data obtained:", data);
          setDataBooks((prevBooks) => [...prevBooks, ...data]);
        })
        .catch((error) => {
          console.error("Error en la petición:", error);
        });
    } catch (error) {
      console.error("Error en la petición:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(20);
  }, []);

  useEffect(() => {
    setDataBooks([]);
    fetchBooks(20);
  }, [seed]);

  // HandleActions
  function handleScroll(e) {
    const threshold = 1;
    const bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight <=
      threshold;

    if (bottom && !loading) {
      console.log("Handler");
      fetchBooks(10);
    }
  }

  return (
    <div
      className="overflow-y-scroll max-h-[400px] border border-gray-300 rounded-md w-2/3 "
      onScroll={handleScroll}>
      <table className=" w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">#</th>
            <th className="py-2">ISBN</th>
            <th className="py-2">TITLE</th>
            <th className="py-2">Author(s)</th>
            <th className="py-2">Publisher</th>
          </tr>
        </thead>
        <tbody>
          {dataBooks.map((item, index) => (
            <React.Fragment key={item.id}>
              <tr>
                <td className="border px-4 py-2" colSpan="4">
                  <Accordion isCompact>
                    <AccordionItem
                      title={
                        <div className="flex w-full gap-10">
                          <div>{index + 1}</div>
                          <div>{item.isbn}</div>
                          <div>{item.title}</div>
                          <div>{item.author}</div>
                          <div>{item.publishedYear}</div>
                        </div>
                      }>
                      <div>
                        <p className="text-base	">Genre: {item.genre}</p>
                        <div className="ml-6 text-xs	">
                          {item?.review?.map((review, index) => (
                            <ol key={index}>
                              <li>
                                #{index + 1}: {review}
                              </li>
                            </ol>
                          ))}
                        </div>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MainTable;
