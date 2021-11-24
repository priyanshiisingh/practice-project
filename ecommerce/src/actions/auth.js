import jwt from "jsonwebtoken";
export const loginUser = (email, password) => {
  //create and sign a JWT

  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find((u) => u.email === email);
  if (user.email === email && user.password === password) {
    const token = jwt.sign({ email }, "SECRET");
    return { type: "LOGIN_SUCCESS", payload: { token } };
  } else {
    return { type: "LOGIN_FAILED", payload: { token: null } };
  }
};
