import React from "react";
import Cards from "../../Components/Cards/Cards";
import { CardData } from "./newFile";
import "./Shop.css";
const Shop = () => {
	return (
		<div className="shop">
			<div className="shop-section">
				<h1>Medicines You May need...</h1>
				<div className="shop-section-inner">
					{CardData.map(({ image, Name, Quantity }) => (
						<Cards image={image} Name={Name} Quantity={Quantity} />
					))}
				</div>
			</div>
			<div className="shop-section">
				<h1>Covid Essentials...</h1>
				<div className="shop-section-inner">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<div className="shop-section">
				<h1>Top Selling healthcare products</h1>
				<div className="shop-section-inner">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
		</div>
	);
};

export default Shop;
