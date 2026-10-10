export const saveUser = (data) => {
  localStorage.setItem("userDetails", JSON.stringify(data));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("userDetails"))?? [];
};

export const getLastUser = () => {
  return JSON.parse(localStorage.getItem("lastUser"))?? [];
};

export const saveLastUser = (data) => {
  localStorage.setItem("lastUser", JSON.stringify(data));
};













