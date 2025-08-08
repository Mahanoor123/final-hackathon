export const setToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");
export const removeToken = () => localStorage.getItem("token");

export const setUser = (user) =>
  localStorage.setItem("user", JSON.stringify(user));

export const getUser = () => {
  localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeuser = () => localStorage.removeItem("user");


export const isAuthorized = () => {
    const token = getToken();
    const user = getUser();

    return !!token && !!user;
}