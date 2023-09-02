import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import UserAvatar from "../../Assets/user.png";
import "./Topbar.css";
const Topbar = ({ setShowModel }) => {
	return (
		<div className="topbar">
			<div className="topbar-container">
				<nav className="topbar-nav">
					<div className="topbar-item-left">
						<div className="topbar-logo">
							<Link to="/">
								<img src={Logo} alt="logo" />
								<h1>Meds.com</h1>
							</Link>
						</div>
						<div className="topbar-search">
							<form action="search" method="get">
								<input
									type="search"
									name="search"
									id="search"
									placeholder="Panadol Extra"
								/>
								<button>Search</button>
							</form>
						</div>
					</div>
					<div className="topbar-item-right">
						<div className="topbar-user-img">
							<img src={UserAvatar} alt="" />
						</div>
						<div className="topbar-button">
							<button onClick={() => setShowModel("login")}>Sign In </button>
							<span>/</span>
							<button onClick={() => setShowModel("signup")}>Sign Up</button>
						</div>
					</div>
				</nav>
				<nav className="topbar-down">
					<div className="topbar-item-center">
						<div>
							<Link to="/">Home</Link>
						</div>
						<div>
							<Link to="/Shop">Shop</Link>
						</div>
						<div>
							<Link to="/Cart">Cart</Link>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Topbar;
