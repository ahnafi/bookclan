import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../services/axios";
import { Link } from "react-router-dom";

const Library = () => {
  const [books, setBooks] = useState([]);
  let i = 1
  useEffect(() => {
    getData((data) => {
      setBooks(data.payload);
    });
  }, []);
  return (
    <section>
      <div className="container bg-slate-200">
        <div className="div px-4">
          <h1>LIST all book</h1>
          <Link
            to={`/library/add`}
            className="inline-block py-4 px-2 my-2 bg-red-500"
          >
            tambah
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 justify-center py-2 px-4">
          {books.length == 0 && "loading nyet"}

          {books.length > 0 &&
            books.map((e) => {
              return (
                <div key={e.id} className="max-w-sm bg-white px-4 py-2">
                  no : {i++} <br />
                  id:{e.id}
                  <h2>judul : {e.judul}</h2>
                  <p>genre : {e.genre}</p>
                  <p>penulis : {e.penulis}</p>
                  <Link
                    to={`detail/${e.id}`}
                    className="bg-blue-500 py-2 px-4 my-4 block text-white"
                  >
                    details
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default Library;
