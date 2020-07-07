// Get User
export const getUser = () => {
    const user = sessionStorage.getItem('user');
    console.log(user);
    if (user) return JSON.parse(user);
    else return null;
}

// Get Token
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

// Remove User Session
export const removeUser = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

// Add User Session
export const setUser = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', user);
}