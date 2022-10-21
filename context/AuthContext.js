import React, {useState,useEffect, createContext} from 'react';
import Router from "next/router";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState('null');
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authTokens, setAuthTokens] = React.useState(null);


    const login = async (username, password) => {
        try {
            console.log(username, password);
            const res = await fetch(`${process.env.API_URL}/auth/jwt/create/`, {
                method: 'POST',
                body: JSON.stringify({"username":username, "password":password}),
                headers: {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            if(res.status === 200){
                setAuthTokens(data)
                setIsAuthenticated(true);
                setError(null);
                setUser(jwt_decode(data.access));
                console.log(jwt_decode(data.access));
                await Router.push("/dashboards");
            }

        } catch (error) {
            setError(error.response &&( error.response.data.detail || error.response.data.error));
            console.log(error);
        }
    }


    const register = async (username, email, password, first_name, last_name) => {
        try {
            console.log(username, password);
            const res = await fetch(`${process.env.API_URL}/auth/users/`, {
                method: 'POST',
                body: JSON.stringify({"username":username, "email":email, "password":password, "first_name":first_name, "last_name":last_name}),
                headers: {'Content-Type': 'application/json'}
            });
            const data = await res.json();
            if(res.status === 201){
                await login(username, password);
            }

        } catch (error) {
            setError(error.response &&( error.response.data.detail || error.response.data.error));
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{user,error,isAuthenticated,login,register }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;