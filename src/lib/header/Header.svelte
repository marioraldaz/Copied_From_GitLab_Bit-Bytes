<script>
	import { page } from '$app/stores';
	import Menu from './menu/Menu.svelte';
	import ShoppingCart from './cart/ShoppingCart.svelte';
	import User from './profile/User.svelte';
	import SearchBar from './SearchBar.svelte';
	import CreatorButton from './CreatorButton.svelte';

</script>

<div class="header">
	<div class="header__left">
		<div class="header__left__Menu">
			<Menu />
			<CreatorButton/>
		</div>
	</div>
	<div class="header__logo">
		<a href="/"><img src="/src/lib/header/images/logo.png" alt="logo.png" /></a>
	</div>

	<div class="header__right">
		{$page.data.username ? $page.data.username : "No profile"}
		<ShoppingCart />
		<a href="/login">
			<User />
		</a>
		<SearchBar />
	</div>
</div>

<style lang="scss">
	.header {
		display: flex;
		height:10rem;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		height: 8.2rem;
		width: 100%;
		top: 0;
		left: 0;
		background-color: rgb(255, 255, 255);
		border-bottom: 2px solid black;
		animation: headerHeight;
		animation-duration: 4s;
		animation-timing-function: ease-out;
		z-index: 100;

		&__left {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 35%;
			height: inherit;

			&__Menu {
				height: 100%;
				width: 100%;
				display: flex;
				animation: hideicon;
				animation-duration: 4s;
				animation-timing-function: ease-in;
			}
		}
		&__right {
			display: flex;
			align-items: center;
			flex-direction: row-reverse;
			flex: 1;
		}
		&__logo {
			display:flex;
			height: 8rem;
			position: relative;
			left:10%;
		}
		&__logo img {
			height: 100%;
			animation: introLogo;
			animation-duration: 2.5s;
			animation-timing-function: ease-in;
		}

		&__home {
			font-size: 3rem;
			padding: 0.5rem;

			a {
				color: black;
				text-decoration: none;
			}

			&:hover {
				transform: scale(120%);
			}
		}

		@keyframes headerHeight {
			0% {
				min-height: 100vh;
			}

			100% {
				min-height: 0;
			}
		}

		@keyframes introLogo {
			0% {
				opacity: 0;
				height: 50vh;
			}
			100% {
				opacity: 1;
			}
		}
	}

	@media screen and (max-width: 1100px) {
		.header {
			&__home {
				font-size: 1.8rem;
				top: 30%;
				left: 15%;
			}
		}
	}

	@media screen and (max-width: 600px) {
		.header {
			&__home {
				font-size: 2rem;
				top: 30%;
				left: 20%;
			}
		}
	}
</style>
