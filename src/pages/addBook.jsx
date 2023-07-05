import { useNavigate } from "react-router-dom";
import { postData } from "../services/axios";

function AddPage() {
    const navigate = useNavigate()
  function handleAddBook(event) {
    event.preventDefault();
    const data = {
      judul: event.target.judul.value,
      genre: event.target.genre.value,
      penulis: event.target.penulis.value,
    };
    postData(data, (calb) => {
        if(calb.payload.isSuccess){
            alert("data berhasil di tambahkan")
            navigate("/library")
        }else{
            alert("data gagal di tambahkan")
        }
        // console.log(calb)
    });
  }
  return (
    <div>
      <h1>tambah</h1>
      <form action="" onSubmit={(e) => handleAddBook(e)}>
        <label htmlFor="judul" className="block">
          judul
        </label>
        <input
          className="border "
          type="text"
          id="judul"
          name="judul"
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
        />
        {/*  */}
        <button type="submit" className="block bg-green-200 px-2 py-2 my-2">
          tambah
        </button>
      </form>
    </div>
  );
}
export default AddPage;
