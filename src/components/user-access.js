import axios from "axios";

const URL = "http://localhost:7000/api/v1";

const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${URL}/auth/login`, {
      identifier: username,
      password: password,
    });
    console.log("Login Successful:", response);
  } catch (error) {
    console.log(error);
  }
};

// loginUser("9109390639", "secret");
export default { loginUser };
