import React, {useState} from 'react';
import {doLogin} from "../helpers/doLogin";
import MainLayout from "../layouts/Main";

interface LoginState {
    password: string;
    username: string;
    isLoading: boolean;
    error: string;
    isLoggedIn: boolean;
}

type LoginAction =
    | { type: "login" | "success" | "error" | "logout" }
    | { type: "field"; fieldName: string; payload: string };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
    switch (action.type) {
        case "field": {
            return {
                ...state,
                [action.fieldName]: action.payload
            };
        }
        case "login": {
            return {
                ...state,
                error: "",
                isLoading: true
            };
        }
        case "success": {
            return {...state, error: "", isLoading: false, isLoggedIn: true};
        }
        case "error": {
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                username: "",
                password: "",
                error: "Incorrect username or password!"
            };
        }
        case "logout": {
            return {
                ...state,
                isLoggedIn: false
            };
        }
        default:
            return state;
    }
};

const initialState: LoginState = {
    password: "",
    username: "",
    isLoading: false,
    error: "",
    isLoggedIn: false
};

export default function Login() {
    const [state, dispatch] = React.useReducer(loginReducer, initialState);
    const {username, password, isLoading, error, isLoggedIn} = state;

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: "login"});

        try {
            await doLogin({username, password});
            dispatch({type: "success"});
        } catch (error) {
            dispatch({type: "error"});
        }
    };

    return (
        <div className="wrapper">
            {isLoggedIn ? (
                <>
                    <div className='login-container'>
                        <p>{`Welcome, ${username}`}</p>
                        <button type="button" onClick={() => dispatch({type: "logout"})}>Logout</button>
                    </div>
                    <MainLayout/>
                </>
            ) : (
                <form className="form-login" onSubmit={onSubmit}>
                    {error && <p className="error">{error}</p>}
                    {error ? null : <h2>Enter your username and password</h2>}
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) =>
                            dispatch({
                                type: "field",
                                fieldName: "username",
                                payload: e.currentTarget.value
                            })
                        }
                    />
                    <input
                        type="password"
                        placeholder="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) =>
                            dispatch({
                                type: "field",
                                fieldName: "password",
                                payload: e.currentTarget.value
                            })
                        }
                    />
                    <button type="submit" className="btn-login" disabled={isLoading}>
                        {isLoading ? "Please wait...." : "OK"}
                    </button>
                </form>
            )}
        </div>
    );
}