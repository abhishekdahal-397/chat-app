import React from "react";
import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
const Vnav = () => {
	return (
		<div>
			<div className="w-[5vw] h-[100vh] bg-gray-400 flex flex-col items-center ">
				<div className=" w-12 mt-5 my-6 m h-12 flex justify-center items-center hover:bg-gray-300 rounded transition-ease duration-300 ">
					<FaHome className="   h-6 w-6" />
				</div>
				<div className=" w-12 mb-6  h-12 flex justify-center items-center hover:bg-gray-300 rounded transition-ease duration-300 ">
					<IoPeople className=" h-6 w-6   " />
				</div>
				<div className=" w-12 my-6  h-12 flex justify-center items-center hover:bg-gray-300 rounded transition-ease duration-300 ">
					<FaMessage className=" h-6 w-6 " />
				</div>
				<div className=" w-12 my-6  h-12 flex justify-center items-center hover:bg-gray-300 rounded transition-ease duration-300 ">
					<ImBin className=" h-6 w-6  " />
				</div>
			</div>
		</div>
	);
};

export default Vnav;
