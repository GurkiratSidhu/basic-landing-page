import React from "react";
import logo from "./images/logo.svg";
import logodark from "./images/logo-dark.svg";
import feature1 from "./images/icon-online.svg";
import feature2 from "./images/icon-budgeting.svg";
import feature3 from "./images/icon-onboarding.svg";
import feature4 from "./images/icon-api.svg";
import article1 from "./images/image-currency.jpg";
import article2 from "./images/image-restaurant.jpg";
import article3 from "./images/image-plane.jpg";
import article4 from "./images/image-confetti.jpg";
import social1 from "./images/icon-facebook.svg";
import social2 from "./images/icon-youtube.svg";
import social3 from "./images/icon-twitter.svg";
import social4 from "./images/icon-pinterest.svg";
import social5 from "./images/icon-instagram.svg";

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
								<img src={feature1} alt="feature1" />
							</div>
							<div className="feature__title">Online Banking</div>
							<div className="feature__description">
								Our modern web and mobile applications allow you to keep track
								of your finances wherever you are in the world.
							</div>
						</div>

						<div className="feature__item">
							<div className="feature__icon">
								<img src={feature2} alt="feature2" />
							</div>
							<div className="feature__title">Simple Budgeting</div>
							<div className="feature__description">
								See exactly where your money goes each month. Receive
								notifications when you’re close to hitting your limits.
							</div>
						</div>

						<div className="feature__item">
							<div className="feature__icon">
								<img src={feature3} alt="feature3" />
							</div>
							<div className="feature__title">Fast Onboarding</div>
							<div className="feature__description">
								We don’t do branches. Open your account in minutes online and
								start taking control of your finances right away.
							</div>
						</div>

						<div className="feature__item">
							<div className="feature__icon">
								<img src={feature4} alt="feature4" />
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
						<a href="/" className="article__item">
							<div
								className="article__image"
								style={{ backgroundImage: `url(${article1})` }}
							></div>
							<div className="article__text">
								<div className="article__author">By Claire Robinson</div>
								<div className="article__title">
									Receive money in any currency with no fees
								</div>
								<div className="article__description">
									The world is getting smaller and we’re becoming more mobile.
									So why should you be forced to only receive money in a single
									…
								</div>
							</div>
						</a>

						<a href="/" className="article__item">
							<div
								className="article__image"
								style={{ backgroundImage: `url(${article2})` }}
							></div>
							<div className="article__text">
								<div className="article__author">By Wilson Hutton</div>
								<div className="article__title">
									Treat yourself without worrying about money
								</div>
								<div className="article__description">
									Our simple budgeting feature allows you to separate out your
									spending and set realistic limits each month. That means you …
								</div>
							</div>
						</a>

						<a href="/" className="article__item">
							<div
								className="article__image"
								style={{ backgroundImage: `url(${article3})` }}
							></div>
							<div className="article__text">
								<div className="article__author">By Wilson Hutton</div>
								<div className="article__title">
									Take your Easybank card wherever you go
								</div>
								<div className="article__description">
									We want you to enjoy your travels. This is why we don’t charge
									any fees on purchases while you’re abroad. We’ll even show you
									…
								</div>
							</div>
						</a>

						<a href="/" className="article__item">
							<div
								className="article__image"
								style={{ backgroundImage: `url(${article4})` }}
							></div>
							<div className="article__text">
								<div className="article__author">By Claire Robinson</div>
								<div className="article__title">
									Our invite-only Beta accounts are now live!
								</div>
								<div className="article__description">
									After a lot of hard work by the whole team, we’re excited to
									launch our closed beta. It’s easy to request an invite through
									the site …
								</div>
							</div>
						</a>
					</div>
				</div>
			</section>
			<footer className="footer">
				<div className="container">
					<a className="footer__logo" href="/">
						<img src={logodark} alt="Easybank" />
					</a>
					<div className="footer__social">
						<a href="/">
							<img src={social1} alt="Facebook" />
						</a>

						<a href="/">
							<img src={social2} alt="YouTube" />
						</a>

						<a href="/">
							<img src={social3} alt="Twitter" />
						</a>

						<a href="/">
							<img src={social4} alt="Pinterest" />
						</a>

						<a href="/">
							<img src={social5} alt="Instagram" />
						</a>
					</div>

					<div className="footer__links col1">
						<a href="/">About Us</a>
						<a href="/">Contact</a>
						<a href="/">Blog</a>
					</div>

					<div className="footer__links col2">
						<a href="/">Careers</a>
						<a href="/">Support</a>
						<a href="/">Privacy Policy</a>
					</div>
					<div className="footer__cta">
						<a href="/" className="button">
							Request Invite
						</a>
					</div>
					<div className="footer__copyright">
						&copy; Easybank. All rights reserved.
					</div>
				</div>
			</footer>
		</body>
	);
}

export default Landingpage;
