import React from "react";
import logo from "./images/logo.svg";
import image1 from "./images/icon-online.svg";
import image2 from "./images/icon-budgeting.svg";
import image3 from "./images/icon-onboarding.svg";
import image4 from "./images/icon-api.svg";
import image5 from "./images/image-currency.jpg";

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

			<section className="feature ">
				<div className="feature__content container continer--pall">
					<div className="feature__intro">
						<h2>Why choose Easybank?</h2>
						<p>
							We leverage Open Banking to turn your bank account into your
							financial hub. Control your finances like never before.
						</p>
					</div>

					<div className="feature__grid">
						<div className="feature__item">
							<div className="feature__icon">
								<img src={image1} alt="Image1" />
							</div>
							<div className="feature__title">Online Banking</div>
							<div className="feature__description">
								Our modern web and mobile applications allow you to keep track
								of your finances wherever you are in the world.
							</div>
						</div>

						<div className="feature__item">
							<div className="feature__icon">
								<img src={image2} alt="Image2" />
							</div>
							<div className="feature__title">Simple Budgeting</div>
							<div className="feature__description">
								See exactly where your money goes each month. Receive
								notifications when you’re close to hitting your limits.
							</div>
						</div>

						<div className="feature__item">
							<div className="feature__icon">
								<img src={image3} alt="Image3" />
							</div>
							<div className="feature__title">Fast Onboarding</div>
							<div className="feature__description">
								We don’t do branches. Open your account in minutes online and
								start taking control of your finances right away.
							</div>
						</div>

						<div className="feature__item">
							<div className="feature__icon">
								<img src={image4} alt="Image4" />
							</div>
							<div className="feature__title">Open API</div>
							<div className="feature__description">
								Manage your savings, investments, pension, and much more from
								one account. Tracking your money has never been easier.
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="articles">
				<div className="article__content container container--pall">
					<h2>Latest Articles</h2>
					<div className="article__grid">
						<a href="#" className="article__item">
							<div className="article__image" style={{backgroundImage: `url(${image5})`}}></div>
							<div className="article__text">
								<div className="article__author">By Claire Robinson</div>
								<div className="article__title">
									Receive money in any currency with no fees
								</div>
								<div className="article__description">
									The world is getting smaller and we're becoming more mobile.
									forced to only receive money in a single ...
								</div>
							</div>
						</a>

						<a href="#" className="article__item">
							<div className="article__image" style={{backgroundImage: `url(${image5})`}}></div>
							<div className="article__text">
								<div className="article__author">By Claire Robinson</div>
								<div className="article__title">
									Receive money in any currency with no fees
								</div>
								<div className="article__description">
									The world is getting smaller and we're becoming more mobile.
									forced to only receive money in a single ...
								</div>
							</div>
						</a>

						<a href="#" className="article__item">
							<div className="article__image" style={{backgroundImage: `url(${image5})`}}></div>
							<div className="article__text">
								<div className="article__author">By Claire Robinson</div>
								<div className="article__title">
									Receive money in any currency with no fees
								</div>
								<div className="article__description">
									The world is getting smaller and we're becoming more mobile.
									forced to only receive money in a single ...
								</div>
							</div>
						</a>

						<a href="#" className="article__item">
							<div className="article__image" style={{backgroundImage: `url(${image5})`}}></div>
							<div className="article__text">
								<div className="article__author">By Claire Robinson</div>
								<div className="article__title">
									Receive money in any currency with no fees
								</div>
								<div className="article__description">
									The world is getting smaller and we're becoming more mobile.
									forced to only receive money in a single ...
								</div>
							</div>
						</a>

						
					</div>
				</div>
			</section>
		</body>
	);
}

export default Landingpage;
