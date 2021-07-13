import React from "react";
import logo from "./images/logo.svg";

function Landingpage() {
	return (
		<body>
			<header class="header">
				<nav class="container container-pall flex flex-jc-sb flex-ai-c">
					<a href="/" className="header__logo">
						<img src={logo} alt="Easybank" />
					</a>

					<a
						id="btnHamburger"
						href="/#"
						className="header__menu hide-for-desktop"
					>
						<span></span>
						<span></span>
						<span></span>
					</a>
					<div class="header__links hide-for-mobile">
						<a href="/#">Home</a>
						<a href="/#">About</a>
						<a href="/#">Contact</a>
						<a href="/#">Blog</a>
						<a href="/#">Careers</a>
					</div>

					<a href="/#" className="button header__cta hide-for-mobile">
						Request Invite
					</a>
				</nav>
			</header>

			<section className="hero">
				<div className="container">
					<div className="hero__image"></div>

					<div className="hero__text container--pall">
						<h1>Next generation digital banking</h1>

						<p>
							Take your financial life online, Your EasyBank account will be for
							spending, saving, budgeting, investing, and so much more.
						</p>
						<a href="/#" className="button hero__cta">
							Request Invite
						</a>
					</div>
				</div>
			</section>
		</body>
	);
}

export default Landingpage;
