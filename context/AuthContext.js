import React, { useState, useEffect, createContext } from 'react';
import Router from "next/router";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();
import axiosInstance from 'src/axiosAPi';
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('null');
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authTokens, setAuthTokens] = React.useState(null);
    const base_url = "http://127.0.0.1:8000";


    const login = async (username, password) => {
        try {
            console.log(username, password);
            const res = await fetch(`${base_url}/auth/jwt/create/`, {

                method: 'POST',
                body: JSON.stringify({ "username": username, "password": password }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            if (res !== undefined) {
                if (res.status === 200) {
                    if (typeof window !== "undefined") {
                        console.log(data);
                        localStorage.setItem('access_token', data.access);
                        localStorage.setItem('refresh_token', data.refresh);
                        localStorage.setItem('username', username);
                        axiosInstance.defaults.headers['Authorization'] = "JWT " + data.access;
                        await Router.push("/home");
                    }
                }
            }
            else {
                setMessage("Incorrect username or password!")
            }
        } catch (error) {
            setError(error.response && (error.response.data.detail || error.response.data.error));
            console.log(error);
        }
    }


    const register = async (username, email, password, first_name, last_name) => {
        try {

            console.log("signing in");
            const res = await fetch(`${base_url}/auth/users/`, {
                method: 'POST',
                body: JSON.stringify({ "username": username, "email": email, "password": password, "first_name": first_name, "last_name": last_name }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            if (res.status === 201) {
                await login(username, password);
            }

        } catch (error) {
            setError(error.response && (error.response.data.detail || error.response.data.error));
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, error, isAuthenticated, login, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;