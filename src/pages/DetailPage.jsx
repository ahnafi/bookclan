import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { delData, findData } from "../services/axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DetailPage() {
  const [book, setBook] = useState({
    judul: "",
    genre: "",
    penulis: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    findData(id, (data) => {
      // console.log(data)
      if (data.payload.length > 0) {
        setBook(data.payload[0]);
      }
    });
  }, [id]);
  // delete
  function deleteHandler(id) {
    if (confirm("yakin???")) {
      delData(id, (calb) => {
        if (calb.payload.isSuccess) {
          alert("data berhasil dihapus");
          navigate("/library");
        } else {
          alert("data gagal di hapus");
        }
      });
    }
  }
  return (
    <div>
      <h1>judul : {book.judul}</h1>
      <p>genre : {book.genre}</p>
      <p>penulis : {book.penulis}</p>
      <Link
        to={`/library/update/${id}`}
        className="inline-block py-4 px-2 my-2 bg-red-500"
      >
        edit
      </Link>
      <button
        className="block py-4 px-2 my-2 bg-red-500"
        onClick={() => deleteHandler(id)}
      >
        hapus
      </button>
    </div>
  );
}
export default DetailPage;
