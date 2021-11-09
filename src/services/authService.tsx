import axios from "axios";

// let API_URL = "http://localhost:8080/api/auth/";
let API_URL = "https://randomuser.me/api/";
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return (
    axios
      // .post(API_URL + "signin", {
      //   username,
      //   password
      // })
      .get(API_URL)
      .then((response) => {
        debugger;
        let result = {
          username: username,
          email: response.data.results[0].email,
          name: `${response.data.results[0].name.first} ${response.data.results[0].name.last}`,
          phone: response.data.results[0].phone,
          cell: response.data.results[0].cell,
          picture: response.data.results[0].picture
        };
        localStorage.setItem("user", JSON.stringify(result));
        // if (response.data.accessToken) {
        //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
        return result;
      })
  );
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};
