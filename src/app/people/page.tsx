import React from "react";
import Vnav from "../components/Vnav/Vnav";
import { People } from "../components/people/People";

const page = () => {
	return (
		<div className="flex">
			<div className="bg-red-400 h-[100vh] w-[5vw]">
				<Vnav />
			</div>
			<div className="bg-blue-400 h-[100vh] w-[25vw]">
				<People />
			</div>
			<div className="bg-purple-400 h-[100vh] w-[70vw]"></div>
		</div>
	);
};

export default page;
