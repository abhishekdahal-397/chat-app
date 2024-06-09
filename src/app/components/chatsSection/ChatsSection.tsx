import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
interface User {
	id: number;
	username: string;
	email: string;
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const ChatsSection = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("/api/users");
			const data: User[] = await res.json();
			console.log(data);

			setUsers(data);
		};

		fetchData();
	}, []);
	return (
		<div className="pr-5">
			<h1 className="text-3xl px-5 font-semibold text-white pt-4"> chats</h1>
			<div>
				<div className="flex items-center rounded-full    p-2 shadow-md">
					<Input
						type="text"
						placeholder="Search..."
						className="flex-1 ml-2 rounded-full py-2 mt-2 px-4 leading-none text-gray-800 bg-white  focus:outline-none"
					/>
				</div>
				<div className="overflow-scroll h-[80vh] w-[25vw] mt-5">
					{users.map((user) => (
						<div className="flex items-center ml-4 px-4 py-2 mt-4 hover:bg-gray-400 transition ease-in duration-300 bg-white rounded">
							<Avatar className="bg-gray-200">
								<AvatarImage src="" alt="@shadcn" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div className="ml-[10px]">
								<p className="block m-0">{user.username}</p>
								<p className="m-0">Latest message</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ChatsSection;
