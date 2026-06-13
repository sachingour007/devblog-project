import { error } from "console";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
	id: string;
	username: string;
	email: string;
	role: "writer" | "admin" | "reader";
}

interface AuthStore {
	user: User | null;
	isAuthenticated: boolean;
	// actions
	setAuth: (user: User) => void;
	logout: () => void;
	setLoading: (loading: boolean) => void;
	setError: (error: string | null) => void;
	loading: boolean;
	error: string | null;
}

export const useAuthStore = create<AuthStore>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: false,
			loading: false,
			error: null,

			setAuth: (user) => {
				set({ user, isAuthenticated: true, error: null });
			},
			setLoading: (loading) => {
				set({ loading });
			},
			setError: (error) => {
				set({ error });
			},

			logout: () => {
				set({ user: null, isAuthenticated: false, error: null });
			},
		}),
		{
			name: "auth-storage",
		},
	),
);
