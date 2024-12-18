@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

body {
	font-family: "Inter", sans-serif;
	font-size: 13px;
	flex-direction: initial;
	background-color: #121212;
	color: #e0e0e0;
}

.md-main {
	height: 100%;
}

.md-main__inner {
	width: 100vw;
	height: 100%;
	position: relative;
	display: flex;
	flex: 1 1 0%;
	background: #181818;
	cursor: text;
	margin: 0;
	max-width: none;
}

/* Navigation */
.md-sidebar--primary {
	flex-grow: 0;
	flex-shrink: 0;
	position: relative;
	z-index: 27;
	background: #1f1f1f;
	transition: box-shadow 300ms ease 0s;
	box-shadow: rgba(0, 0, 0, 0.25) -1px 0px 0px 0px inset;
	width: 240px;
	top: 0 !important;
	align-self: normal;
	padding: 0;
}

@media screen and (max-width: 76.1875em) {
	.md-sidebar--primary {
		position: absolute;
	}
}

.md-sidebar--primary .mdocotion-nav-header {
	padding: 10px;
	font-weight: 600;
	text-align: center;
}

.md-sidebar--primary .mdocotion-nav-header .mdocotion-nav-logo {
	margin: 22px auto 0;
}

.md-nav {
	font-size: inherit;
}

.md-nav__link {
	justify-content: unset;
	padding: 5px 5px;
	margin-top: 0;
	border-radius: 5px;
}

.md-nav__link .md-nav__icon {
	height: 18px;
	width: 18px;
	border-radius: 4px;
	margin-right: 6px;
}

.md-nav__link:focus,
.md-nav__link:hover,
.md-nav__item .md-nav__link--active {
	background: rgba(255, 255, 255, 0.1);
	color: #fff;
}

.md-nav__item .md-nav__link--active {
	font-weight: 600;
}

.md-nav__item--nested > nav:not([data-md-level="1"]) > ul {
	margin-left: 17px;
}

.md-nav__item--nested > nav > ul > li > a {
	padding-left: 10px;
}

.md-nav__item {
	padding: 0 3px;
}

/* Breadcrumbs */
ul.mdocotion-breadcrumbs {
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 14px;
	line-height: 1.5;
	font-weight: 400;
	color: #e0e0e0;
	margin-left: 10px;
}

ul.mdocotion-breadcrumbs > li {
}

ul.mdocotion-breadcrumbs > li > a {
	color: #e0e0e0;
}

ul.mdocotion-breadcrumbs > li:not(:last-child) > span.breadcrumbs-seperator:after {
	content: "/";
	margin: 0 5px;
	color: #e0e0e0;
}

/* Search */
.md-search__inner {
	width: 45px;
}

.md-search__form {
	background: none;
	height: 40px;
}

.md-search__icon,
.md-search__icon.md-icon svg,
.md-header__button.md-icon[for="__search"],
.md-header__button.md-icon[for="__search"] svg {
	cursor: pointer;
	color: #e0e0e0;
	height: 20px;
	width: 20px;
	margin-top: 2px;
	padding: 0;
}

/* Header */
.md-header {
	max-width: 100vw;
	z-index: 100;
	background: #181818;
	user-select: none;
	position: fixed;
	top: 0;
	left: 240px;
	right: 0;
	transition: all 0.3s ease-in;
}

html:not([data-scroll]) .md-header, html[data-scroll="0"] .md-header {
	background: rgba(24, 24, 24, 0.9);
}

html .md-header:hover {
	background: rgba(24, 24, 24);
}

@media screen and (max-width: 76.1875em) {
	.md-header {
		left: 0;
	}
}

.md-header .header-inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 45px;
	padding-left: 12px;
	padding-right: 10px;
}

.md-header .header-inner .header-info-bar {
	display: flex;
	align-items: center;
}

.md-header .header-inner .header-info-bar .md-header__button.md-icon {
	color: #e0e0e0;
	padding: 0;
	margin: 0 10px 0 10px;
}

.md-header .header-inner .header-info-bar .md-header__button.md-icon svg {
	height: 20px;
	width: 20px;
}

.md-header.md-header--shadow {
	box-shadow: none;
}

.md-header .header-inner .mdocotion-header-nav {
	margin: 0;
	padding: 0;
	list-style: none;
}

/* Content */
.md-content {
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow: hidden;
	margin-top: 50px;
	box-sizing: border-box;
}

.md-content__inner::before {
	height: 0;
}

.md-content article.mdocotion-content {
	flex-grow: 0;
	flex-shrink: 1;
	display: flex;
	flex-direction: column;
	background: #181818;
	z-index: 1;
	height: calc(100vh - 50px);
	max-height: 100%;
	position: relative;
	margin: 0 !important;
	padding: 0;
}

.md-content article.mdocotion-content .mdocotion-content-scroller {
	display: flex;
	flex-direction: column;
	z-index: 1;
	flex-grow: 1;
	position: relative;
	overflow: auto;
	margin-right: 0px;
	margin-bottom: 0px;
}

.md-content article.mdocotion-content .mdocotion-content-scroller main.mdocotion-content-view {
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
}

.mdocotion-header-view {
	user-select: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-shrink: 0;
	flex-grow: 0;
	z-index: 2;
	margin-left: -1.2rem;
	margin-right: -1.2rem;
}

.mdocotion-header-view img {
	display: block;
	object-fit: cover;
	border-radius: 0px;
	width: 100%;
	height: 20vh;
	opacity: 1;
	object-position: center 50%;
}

.mdocotion-content-block {
	max-width: 100%;
	min-width: 0px;
	width: 900px;
	padding-top: 50px;
}

.mdocotion-content-block .mdocotion-content-block-inner {
	flex-shrink: 0;
	flex-grow: 1;
	max-width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	font-size: 16px;
	line-height: 1.5;
	width: 100%;
	z-index: 4;
	padding-bottom: 10vh;
	padding-left: calc(96px + env(safe-area-inset-left));
	padding-right: calc(96px + env(safe-area-inset-right));
}

@media screen and (max-width: 76.1875em) {
	.mdocotion-content-block .mdocotion-content-block-inner {
		padding-left: 20px;
		padding-right: 20px;
	}
}

.mdocotion-content-block h1 {
	color: #e0e0e0;
	font-weight: 700;
	line-height: 1.2;
	font-size: 40px;
}

.mdocotion-content-block a,
.mdocotion-content-block a:hover,
.mdocotion-content-block a:visited {
	text-decoration: underline;
	color: #bb86fc;
}

/* IoT styling */
.mdocotion-content-block .code-const {
	background: rgb(0, 150, 172);
	padding: 5px 10px;
	border-radius: 5px;
	color: rgb(255, 255, 255);
	font-size: 0.8em;
	vertical-align: middle;
}

.mdocotion-content-block .code-pin {
	background: rgb(114, 191, 68);
	padding: 5px 10px;
	border-radius: 5px;
	color: rgb(0, 0, 0);
	font-size: 0.8em;
	vertical-align: middle;
}
