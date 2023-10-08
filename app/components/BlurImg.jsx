"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useFirestoreDb from "../hooks/useFirestoreDb";
// import Aos from "aos";
import AOS from "aos";
import "aos/dist/aos.css";

const LoadingIndicator = () => (
	<div className="text-center mt-10">
		<progress className="progress w-56"></progress>
	</div>
);

const BlurImg = () => {
	const [isLoading, setLoading] = useState(true);
	const [isDragging, setIsDragging] = useState(false);
	const [img, setImg] = useState([]);

	const { docs: images, isLoadingg } = useFirestoreDb("images");

	useEffect(() => {
		if (!isLoadingg && images.length > 0) {
			setImg(images);
			setLoading(false);
		}
		AOS.init({
			duration: 1500,
			easing: "ease-out-cubic",
			once: true,
		});
	}, [isLoadingg, images]);

	if (isLoadingg) {
		return <LoadingIndicator />;
	}

	const cssClass = (...classes) => {
		return classes.filter(Boolean).join(" ");
	};

	const handleDragStart = (e, index) => {
		e.dataTransfer.setData("text/plain", index.toString());
		setIsDragging(true);
		e.target.style.translate = "40px";
	};

	const handleDragEnd = (e) => {
		setIsDragging(false);
		e.target.style.translate = 0; // Example: Resetting opacity
	};
	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDragEnter = (e) => {
		e.preventDefault();
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e, index) => {
		e.preventDefault();
		setIsDragging(false);

		const startIndex = parseInt(e.dataTransfer.getData("text/plain"));
		const setNew = [...img];
		const [draggadImg] = setNew.splice(startIndex, 1);
		setNew.splice(index, 0, draggadImg);
		setImg(setNew);
		AOS.refreshHard();
	};

	return (
		<div className="aspect-auto columns-3xs xs:columns-2 sm:columns-2xs xl:columns-4 gap-y-10 gap-x-6 xl:gap-x-8 cursor-move">
			{/* grid gap-y-10 gap-x-6 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
			xl:gap-x-8 as*/}
			{img.map((image, index) => (
				<div
					draggable
					onDragStart={(e) => handleDragStart(e, index)}
					onDragEnd={handleDragEnd}
					onDragOver={handleDragOver}
					onDragEnter={handleDragEnter}
					onDragLeave={handleDragLeave}
					onDrop={(e) => handleDrop(e, index)}
					className={cssClass(
						"group",
						isDragging ? "scale-110 duration-2000" : "scale-100 duration-2000"
					)}
					key={index}
				>
					<div
						data-aos="zoom-out-up"
						className="relative w-full h-auto overflow-hidden rounded-lg  mb-6 border-red-700 border"
					>
						{/* h-[376px] sm:h-[300px] */}
						<img
							data-aos="zoom-out-down"
							data-aos-duration="3000"
							layout="fill"
							// sizes="100vw"
							// style={{ width: "auto", height: "auto" }}
							alt="Gallery image"
							src={image.imageUrl}
							// src={"https://bit.ly/placeholder-img"}
							className={cssClass(
								"rounded-lg object-cover duration-700 ease-in-out group-hover:opacity-75 h-full w-full bg-gray-200",
								isLoading
									? "scale-110 blur-2xl grayscale"
									: "scale-100 blur-0 grayscale-0"
							)}
							onLoad={() => setLoading(false)}
						/>
						<h3 className="px-1 pt-4 text-sm text-gray-500">
							Created by:{" "}
							<span className="text-lg font-medium text-gray-300">
								{image.userName}
							</span>
						</h3>
						<p className="px-1 pt-1 pb-4 text-sm text-gray-500">
							Created On:{" "}
							<span className="text-gray-300">
								{image.createdAt.toLocaleDateString()}
							</span>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlurImg;
