import React from "react";
import { IoIosCall } from "react-icons/io";
import { FcVideoCall } from "react-icons/fc";
import { PiDotsThreeCircle } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { TbSticker2 } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
const MessageSection = () => {
	return (
		<div>
			<div className="h-[10vh] relative flex items-center  bg-pink-400  ">
				<div className="flex w-[15vw] h-[4vw]">
					<Avatar className=" mx-5 self-center ">
						<AvatarImage src="" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p className="whitespace-nowrap relative top-2 right-4">
						Elanor Hughes
					</p>
					<span className="relative right-[9vw] top-[2vw] whitespace-nowrap ">
						Active now
					</span>
				</div>
				<div className="flex  w-[20vw] h-[8vh] items-center justify-center absolute right-2">
					<div className=" flex items-center justify-center hover:bg-slate-500 rounded h-[7vh] w-[4vw] ">
						<IoIosCall className="h-6 w-6 " />
					</div>
					<div className=" flex items-center justify-center hover:bg-slate-500 rounded h-[7vh] w-[4vw] ">
						<FcVideoCall className=" h-6 w-6 " />
					</div>
					<div className="  flex items-center justify-center hover:bg-slate-500 rounded h-[7vh] w-[4vw] ">
						<PiDotsThreeCircle className="h-6 w-6" />
					</div>
				</div>
			</div>
			<div className="Midsection h-[81vh] rounded mb-4vh bg-white w-full">
				{" "}
			</div>
			<div className="flex items-center ">
				<div className="h-[5vh] w-[6vh] rounded  flex items-center justify-center">
					<FaCirclePlus className="text-blue-400 h-5 w-5 " />
				</div>

				<div className="h-[5vh] w-[6vh] rounded  flex items-center justify-center">
					<FaImage className="text-blue-400 h-5 w-5" />
				</div>
				<div className="h-[5vh] w-[6vh] rounded  flex items-center justify-center">
					<TbSticker2 className="text-blue-400 h-5 w-5" />
				</div>

				<div className="h-[5vh] w-[6vh] rounded  flex items-center justify-center">
					{" "}
					<MdOutlineGifBox className="text-blue-400 h-5 w-5" />
				</div>

				<Input className="flex w-[53vw] ml-6" type="text " placeholder="Aa" />
				<div className="h-[5vh] w-[5vh] flex ml-3  rounded hover:bg-gray-400 justify-center items-center ">
					<AiFillLike className="text-blue-400 h-5 w-5" />
				</div>
			</div>
		</div>
	);
};

export default MessageSection;
