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
}

export const useAuthStore = create<AuthStore>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: false,

			setAuth: (user) => {
				set({ user, isAuthenticated: true });
			},

			logout: () => {
				set({ user: null, isAuthenticated: false });
			},
		}),
		{
			name: "auth-storage",
		},
	),
);
