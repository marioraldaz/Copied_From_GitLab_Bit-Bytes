<script>
	import userImg from '/src/lib/header/images/usuario.png';

	let visibility = false;
</script>

<div class="header__user">
	<label for="user">
		<img src={userImg} alt="usuario.png" />
	</label>
	<input type="checkbox" id="user" name="" bind:checked={visibility} />
</div>

<style lang="scss">
	.header__user {
		float: right;
		width: 8rem;
		height: 8rem;
		animation: hideicon;
		animation-duration: 5s;
		animation-timing-function: ease-in;

		img {
			position: relative;
			width: 60%;
			height: 60%;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			transition: all 0.3s;
			cursor: pointer;

			&:hover {
				width: 75%;
				height: 75%;
				filter: drop-shadow(0.2rem 0.2rem 0.2rem rgb(176, 32, 229));
			}
		}
		transition: all 0.5s ease-out;
	}

	[type='checkbox'] {
		display: none;
	}

	/*.container {
		position: absolute;
		top: 8rem;
		background: linear-gradient(120deg, rgb(176, 32, 229), rgb(94, 176, 208));
		border: 2px solid black;
		transform: translateX(5%);
		right: 2rem;
		width: 107%;
		max-width: 120%;
		height: 92vh;
		z-index: 9999;
	}*/

	@media screen and (max-width: 600px) {
		.header__user {
			width: 5.5rem;
			height: 5.5rem;
			margin-top: 6%;
		}
	}
</style>
