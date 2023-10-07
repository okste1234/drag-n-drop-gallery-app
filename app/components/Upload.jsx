"use client";

import Image from "next/image";
import React, { useState } from "react";
import useStorage from "../hooks/useStorage";

const Upload = () => {
	const [select, setSelect] = useState(null);
	const { progress, error, startUpload } = useStorage();

	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) {
			setSelect(e.target.files[0]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (select) {
			// upload
			startUpload(select);
			// console.log(select);
		}
		setSelect(null);
	};
	return (
		<div onSubmit={handleSubmit} className="text-center mt-10">
			<form className="items-center gap-8 flex-col flex">
				<input
					onChange={handleFileChange}
					type="file"
					className="file-input file-input-bordered w-full max-w-xs"
				/>

				<button
					type="submit"
					className={`btn gap-3 ${Boolean(progress) && "loading"}`}
					disabled={!select}
				>
					Upload
					<span>
						<Image src={"/r.png"} width={20} height={20} />
					</span>
				</button>
			</form>
		</div>
	);
};

export default Upload;
