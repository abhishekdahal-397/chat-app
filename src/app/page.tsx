"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Link href="/login">
				<Button>Login</Button>
			</Link>
			<Link href="/register">
				<Button>Register</Button>
			</Link>
			<Link href="/mainpage">
				<Button>Main Page</Button>
			</Link>
		</main>
	);
}
