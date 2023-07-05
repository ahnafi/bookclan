import axios from "axios";
// get
export async function getData(callback) {
  const res = await axios.get("http://api.buydiamond.my.id/list");
  const data = res.data;
  callback(data);
}
// get find
export async function findData(id,callback) {
  const res = await axios.get(`http://api.buydiamond.my.id/list/${id}`);
  const data = res.data
  callback(data);
}
// post
export function postData(data, callback) {
  axios
    .post("http://api.buydiamond.my.id/list", {
      judul: data.judul,
      genre: data.genre,
      penulis: data.penulis,
    })
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
}
// put
export function putData(data, callback) {
  axios
    .put("http://api.buydiamond.my.id/list", {
      id: data.id,
      judul: data.judul,
      genre: data.genre,
      penulis: data.penulis,
    })
    .then((res) => callback(res.data))
    .catch((err) => callback(err));
}

// delete
export function delData(id, callback) {
  axios
    .delete("http://api.buydiamond.my.id/list", {
      data: {
        id: id,
      },
    })
    .then((res) => callback(res.data))
    .catch((err) => callback({ err }));
}
