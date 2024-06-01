import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const People = () => {
	return (
		<div className="bg-blue-500 h-full rounded">
			<span className="font-bold ml-5 my-11 text-[5vh]">People</span>
			<p className="ml-5 my-2 opacity-30">Active contacts (11)</p>

			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
			<div className="w-[23vw] px-3 py-1 select-none transition-ease duration-300 rounded hover:bg-gray-200  cursor-pointer  mt-7 ml-5 flex">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<p className="relative top-2 left-4">Abhishek Dahal</p>
			</div>
		</div>
	);
};
