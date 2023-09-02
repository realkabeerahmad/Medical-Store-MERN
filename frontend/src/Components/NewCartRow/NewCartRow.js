import React from "react";

const NewCartRow = ({ med, quantity, price }) => {
	return (
		<tbody>
			<tr>
				<td className="med-name">{med}</td>
				<td>{quantity}</td>
				<td>PKR {price}</td>
				<td>PKR {quantity * price}</td>
			</tr>
		</tbody>
	);
};

export default NewCartRow;
