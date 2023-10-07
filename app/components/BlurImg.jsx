import Image from "next/image";
import { useState, useEffect } from "react";
import useFirestoreDb from "../hooks/useFirestoreDb";
import AOS from "aos";
import "aos/dist/aos.css";

const LoadingIndicator = () => (
	<div className="text-center mt-10">
		<progress className="progress w-56"></progress>
	</div>
);

const BlurImg = () => {
	const [isLoading, setLoading] = useState(true);
	const [isDragging, setIsDragging] = useState(false); // Change the initial state to false
	const [img, setImg] = useState([]);

	const { docs: images, isLoadingg } = useFirestoreDb("images");

	useEffect(() => {
		if (!isLoadingg && images.length > 0) {
			setImg(images);
			setLoading(false);
		}
		AOS.init();
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
	};

	const handleDragEnd = (e) => {
		e.preventDefault();
		setIsDragging(false);
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

	const handleDrop = (e, newIndex) => {
		e.preventDefault();
		const startIndex = parseInt(e.dataTransfer.getData("text/plain"));
		const newImages = [...img];
		const [draggedImage] = newImages.splice(startIndex, 1);
		newImages.splice(newIndex, 0, draggedImage);
		setImg(newImages);
	};

	return (
		<div className="grid gap-y-10 gap-x-6 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 cursor-grab">
			{img.map((image, index) => (
				<div
					draggable={true}
					data-aos="fade-up"
					onDragEnd={handleDragEnd}
					onDragStart={(e) => handleDragStart(e, index)}
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
					<div className="relative aspect-w-1 aspect-h-1 w-full h-[376px] sm:h-[300px] overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
						<Image
							layout="fill"
							alt="Gallery image"
							objectFit="cover"
							src={image.imageUrl}
							className={cssClass(
								"duration-700 ease-in-out group-hover:opacity-75 h-full w-full",
								isLoading
									? "scale-110 blur-2xl grayscale"
									: "scale-100 blur-0 grayscale-0"
							)}
							onLoadingComplete={() => setLoading(false)}
						/>
					</div>
					<h3 className="mt-4 text-sm text-gray-700">
						Created by:{" "}
						<span className="text-lg font-medium text-gray-900">
							{image.userName}
						</span>
					</h3>
					<p className="mt-1 text-sm text-gray-700">
						Created On: {image.createdAt.toLocaleDateString()}
					</p>
				</div>
			))}
		</div>
	);
};

export default BlurImg;
