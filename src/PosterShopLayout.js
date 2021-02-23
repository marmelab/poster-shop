import { useEffect, useState } from "react";
import { Layout, useAuthState, useLogout } from "react-admin";

export const PosterShopLayout = (props) => {
    const { loaded, authenticated } = useAuthState();
    const logout = useLogout();
    const [logoutTimeout, setLogoutTimeout] = useState();

    useEffect(() => {
        if (loaded && authenticated) {
            const timeout = setTimeout(() => {
                logout();
            }, 30 * 60 * 1000);
            setLogoutTimeout(timeout);
        }
    }, [loaded, authenticated, setLogoutTimeout, logout]);

    //Todo authenticated state does not update when logging out
    //find another way to clear timeout
    useEffect(() => {
        if (!authenticated && logoutTimeout) {
            clearTimeout(logoutTimeout);
        }
    }, [logoutTimeout, authenticated, setLogoutTimeout]);

    return <Layout {...props} />;
};
