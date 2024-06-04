"use client";
import React from "react";
import Vnav from "../components/Vnav/Vnav";
import MessageSection from "../components/messagesection/messageSection";
import ChatsSection from "../components/chatsSection/ChatsSection";
const page = () => {
	return (
		<div className="flex">
			<div className="bg-red-400 h-[100vh] w-[5vw]">
				<Vnav />
			</div>
			<div className="bg-blue-800 h-[100vh] w-[25vw]">
				<ChatsSection />
			</div>
			<div className="bg-red-400 h-[100vh]  w-[75vw]">
				<MessageSection />
			</div>
		</div>
	);
};

export default page;
