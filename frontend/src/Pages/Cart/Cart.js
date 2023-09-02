import React from "react";
import NewCartRow from "../../Components/NewCartRow/NewCartRow";
import "./Cart.css";

const Cart = () => {
	return (
		<div className="cart-container">
			<table>
				<thead>
					<tr>
						<th className="med-name">Medicine Name</th>
						<th>Quantity</th>
						<th>Unit Price</th>
						<th>Sub total</th>
					</tr>
				</thead>
				<NewCartRow med={"Panadol"} quantity={20} price={200} />
			</table>
			<button>Proceed</button>
		</div>
	);
};

export default Cart;
