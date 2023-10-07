// import React from "react";
// import BlurImg from "./BlurImg";
// import {
// 	GridContextProvider,
// 	GridDropZone,
// 	GridItem,
// 	swap,
// } from "react-grid-dnd";

// const Dnd = () => {
// 	function onChange(sourceId, sourceIndex, targetIndex, targetId) {
// 		const nextState = swap(items, sourceIndex, targetIndex);
// 		setImages(nextState);
// 	}

// 	return (
// 		<GridContextProvider onChange={onChange}>
// 			<GridDropZone
// 				id="items"
// 				boxesPerRow={4}
// 				rowHeight={100}
// 				style={{ height: "400px" }}
// 			>
// 				<BlurImg />
// 			</GridDropZone>
// 		</GridContextProvider>
// 	);
// };

// export default Dnd;
