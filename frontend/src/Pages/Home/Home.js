import React from "react";
import "./Home.css";
const Home = () => {
	return (
		<div>
			<div className="home-top-container">
				<div className="home-banner sky">
					<h1>Online Medical Store – Online Pharmacy in Pakistan</h1>
					<p>We home-deliver medicines and health products all over Lahore.</p>
				</div>
				<div className="home-banner grey">
					<h1>GET UPTO 33% DISCOUNT & 15% Cashback</h1>
					<p>
						<strong>+ Rs.50 Singup discount on every order.</strong>
					</p>
				</div>
				<div className="home-banner third">
					<h1>Shop Medicines online your way</h1>
					<div className="third-items">
						<div className="third-items-card">
							<img
								src="https://262510-816405-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/pickup.png"
								alt=""
							/>
							<p>NEW ! Pickup from Store</p>
						</div>
						<div className="third-items-card">
							<img
								src="https://262510-816405-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/free-shipping.png"
								alt=""
							/>
							<p>Low cost shipping across Lahore</p>
						</div>
						<div className="third-items-card">
							<img
								src="https://262510-816405-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/ship-to-store.png"
								alt=""
							/>
							<p>Ship to Store</p>
						</div>
						<div className="third-items-card">
							<img
								src="https://262510-816405-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/1546408_Doordash_Postmates_120x120.png"
								alt=""
							/>
							<p>Same day deliveries</p>
						</div>
					</div>
				</div>
				<div className="home-banner third">
					<h1>Browse medicines & health products</h1>
					<div className="third-items">
						<div className="third-items-card">
							<img
								src="https://262510-816405-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/refill-prescriptions.png"
								alt=""
							/>
							<p>Daily Health Needs</p>
						</div>
						<div className="third-items-card">
							<img
								src="https://262510-816405-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/stethoscope.jpg"
								alt=""
							/>
							<p>Devices & Instruments</p>
						</div>
						<div className="third-items-card">
							<img
								src="https://262510-816405-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/sexual-wellness.jpg"
								alt=""
							/>
							<p>Sexual Wellness</p>
						</div>
						<div className="third-items-card">
							<img
								src="https://262510-816405-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/01/herbal.jpg"
								alt=""
							/>
							<p>Alternate Medicines</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
