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
        if (localStorage.getItem("username")) {
            const loginSince = Date.now() - localStorage.getItem("loginTime");
            return loginSince >= 30 * 60 * 1000
                ? Promise.reject()
                : Promise.resolve();
        }
        return Promise.reject();
    },
    getPermissions: () => {
        if (localStorage.getItem("username") === "admin") {
            return Promise.resolve("admin");
        }
        return Promise.resolve();
    },
};
