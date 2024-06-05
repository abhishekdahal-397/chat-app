import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
	id: number;
	name: string;
	email: string;
}
export const People = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [currentUser, setCurrentUser] = useState("");

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch("/api/users"); // Assuming your backend API endpoint is '/api/users'
				if (response.ok) {
					const data = await response.json();
					setUsers(data);
					console.log(data);
				} else {
					console.error("Failed to fetch users");
				}
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div className="bg-blue-500 h-full rounded">
			<span className="font-bold ml-5 my-11 text-[5vh]">People</span>
			<p className="ml-5 my-2 opacity-30">Active contacts (11)</p>

			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
		</div>
	);
};
