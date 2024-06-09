"use client";
import React, { createContext, useReducer, useContext, ReactNode } from "react";

interface User {
	id: string;
	name: string;
	email: string;
}

interface UserState {
	user: User | null;
}

type Action = { type: "LOGIN_SUCCESS"; payload: User } | { type: "LOGOUT" };

const initialState: UserState = {
	user: null,
};

const UserContext = createContext<{
	state: UserState;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

const userReducer = (state: UserState, action: Action): UserState => {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return {
				...state,
				user: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(userReducer, initialState);

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
