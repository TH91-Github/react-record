import axios from 'axios';
// Axios
export const loadAxios = async (SERVER_URL) => {
  try {
    const res = await axios.get(SERVER_URL);
    if(res.status === 200){
      return res;
    }
  }catch(error){
    console.log(error);
  }
}
export const postAxios = async(SERVER_URL, postData) => { 
  await axios.post(SERVER_URL , postData)
}
export const removeAxios = async(SERVER_URL, delData) => {
  await axios.delete(SERVER_URL , delData)
}

export const putAxios = async(SERVER_URL, putData) => {
  await axios.put(SERVER_URL , putData)
}
