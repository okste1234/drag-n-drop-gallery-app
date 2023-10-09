"use client";
import BlurImg from "./BlurImg";

const Gallery = () => {
	return (
		<div className="mx-auto max-w-2xl py-6 px-8 sm:py-10 xs:px-6 lg:max-w-[1400px] lg:px-8">
			<div className="text-center text-base sm:text-lg pb-4 sm:pb-10 font-semibold">
				<p>
					Transform Your Gallery with Effortless{" "}
					<span className="text-blue-700 font-bold">Drag & Drop</span>{" "}
					Arrangement! - {"("}
					<span className="font-light text-base text-red-700">
						desktop view for better dnd experience
					</span>
					{")"}
				</p>
			</div>
			<BlurImg />
		</div>
	);
};

export default Gallery;
