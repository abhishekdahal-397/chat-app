import React from "react";
import Vnav from "../components/Vnav/Vnav";
import { People } from "../components/people/People";
import MessageSection from "../components/messagesection/messageSection";

const page = () => {
	return (
		<div className="flex">
			<div className="bg-red-400 h-[100vh] w-[5vw]">
				<Vnav />
			</div>
			<div className="bg-blue-800 h-[100vh] w-[25vw]">
				<People />
			</div>
			<div className="bg-red-400  h-[100vh]  w-[75vw]">
				<MessageSection />
			</div>
		</div>
	);
};

export default page;
