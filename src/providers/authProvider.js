export const authProvider = {
    login: ({ username }) => {
        localStorage.setItem("username", username);
        localStorage.setItem("loginTime", Date.now());
        return Promise.resolve();
    },
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem("username")
            ? Promise.reject()
            : Promise.resolve();
    },
    getPermissions: () => {
        if (localStorage.getItem("username") === "admin") {
            return Promise.resolve("admin");
        }
        return Promise.resolve();
    },
};
