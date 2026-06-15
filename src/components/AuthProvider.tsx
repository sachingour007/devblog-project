"use client";

import React, { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { setAuth, logout, setLoading, loading } = useAuthStore();
	const navRouter = useRouter();

	const getProfile = async () => {
		try {
			setLoading(true);
			const res = await fetch("/api/auth/getProfile", {
				method: "GET",
				credentials: "include",
			});

			if (!res.ok) {
				logout();
				return;
			}
			const data = await res.json();

			if (data.user) {
				setAuth(data.user);
			} else {
				logout();
			}
		} catch (error) {
			console.error("Auth check failed:", error);
			logout();
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getProfile();
	}, []);

	if (loading) return <p>Loading...</p>;

	return <>{children}</>;
};

export default AuthProvider;
