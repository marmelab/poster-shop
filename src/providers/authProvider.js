let timeout;

const setLogoutTimeout = () => {
    timeout = setTimeout(() => {
        localStorage.removeItem("username");
        document.location.reload();
    }, 30 * 60 * 1000);
};

export const authProvider = {
    login: ({ username }) => {
        localStorage.setItem("username", username);
        localStorage.setItem("loginTime", Date.now());
        setLogoutTimeout();
        return Promise.resolve();
    },
    logout: () => {
        clearTimeout(timeout);
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    checkAuth: () => {
        clearTimeout(timeout);
        if (localStorage.getItem("username")) {
            setLogoutTimeout();
            return Promise.resolve();
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
