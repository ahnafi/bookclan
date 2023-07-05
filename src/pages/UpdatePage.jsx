import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findData, putData } from "../services/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdatePage() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    judul: "",
    genre: "",
    penulis: "",
  });
  const { id } = useParams();
  useEffect(() => {
    findData(id, (data) => {
      // console.log(data)
      if (data.payload.length > 0) {
        setBook(data.payload[0]);
      }
    });
  }, [id]);

  //
  function updateHandler(event) {
    event.preventDefault();
    const data = {
      id,
      judul: event.target.judul.value,
      genre: event.target.genre.value,
      penulis: event.target.penulis.value,
    };
    putData(data, (calb) => {
      if (calb.payload.isSuccess) {
        alert("data berhasil diubah");
        navigate(`/library/detail/${id}`);
      } else {
        alert("data gagal diubah");
      }
      // console.log(calb)
    });
  }

  return (
    <div>
      <h1>ubah</h1>
      <form action="" onSubmit={(e) => updateHandler(e)}>
        <label htmlFor="judul" className="block">
          judul
        </label>
        <input
          className="border "
          type="text"
          id="judul"
          name="judul"
          defaultValue={book.judul}
          required
        />
        <label htmlFor="genre" className="block">
          genre
        </label>
        <input
          className="border "
          type="text"
          id="genre"
          name="genre"
          required
          defaultValue={book.genre}
        />
        <label htmlFor="penulis" className="block">
          penulis
        </label>
        <input
          className="border "
          type="text"
          id="penulis"
          name="penulis"
          required
          defaultValue={book.penulis}
        />

        {/*  */}
        <button type="submit" className="block bg-green-200 px-2 py-2 my-2">
          ubah
        </button>
      </form>
    </div>
  );
}
export default UpdatePage;
