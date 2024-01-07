<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	export let profiles = [];
	export let form;
	let username = '';
	let password = '';
	let profile;
	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';

	function trySignIn() {
		profile = profiles.find(
			(profile) => profile.username == username && profile.password == password
		);
		if (!profile) {
			console.log(username);
			return showError('Username or password are incorrect');
		} else {
			signIn(username, password);
		}
	}

	async function signIn({ cookies }) {
		const data = await request.json();

		if (!data.username) {
			throw error(400, 'Username is required!');
		}

		if (!data.password) {
			throw error(400, 'Password is required!');
		}

		cookies.set('token', 'token_Value', {
			path: '/' // ya que sino lo fija en /api y sólo será válidas en esa ruta
		});

		return json(
			{ name: data.username, id: 1 },
			{
				status: 200
			}
		);
	}

	function greet(username) {
		return "<div class='greetMessage' >Hello " + username + ' !</div>';
	}
	function showError(message) {
		return "<div class='errorMessage' >" + message + '</div>';
	}
</script>

{#if form?.success}
	<p style="color: green;">You are now logged in!</p>
{/if}
<div class="container">
	<div class="center">
		<h1>Login</h1>
		<form action="" method="post" use:enhance>
			<div class="text-field">
				<div class="text-field__text">
					<input
						type="text"
						name="username"
						bind:value={username}
						required
						placeholder="Username"
					/>
				</div>
			</div>
			<div class="text-field">
				<div class="text-field__text">
					<input
						type="password"
						name="password"
						bind:value={password}
						required
						placeholder="Password"
					/>
				</div>
			</div>
			<div class="pass">Forgot Password?</div>
			<button class="logIn-button" on:click={trySignIn}>Log In </button>
			<div class="singup_link">
				Not a member? <a href="login/register">Sign Up</a>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	.container {
		height: 100vh;
		width: 100%;
	}
	.center {
		position: absolute;
		top: 53%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 400px;
		background: rgb(255, 255, 255);
		border-radius: 1rem;
	}

	.center h1 {
		text-align: center;
		padding: 2rem 0 2rem 0;
		font-size: 2.5rem;
	}

	.center form {
		padding: 0 40px;
		box-sizing: border-box;
	}

	form .text-field {
		position: relative;
		border-bottom: 2px solid rgb(173, 173, 173);
		margin: 3rem 0;
	}

	.text-field__text {
		width: 100%;
		padding: 0 0.5rem;
		height: 40px;
		font-size: 1.6rem;
		border: none;
		outline: none;
		background: none;
	}

	input {
		border: none;
		&:focus {
			outline: none;
		}
	}
	.text-field span {
		position: absolute;
		top: 50%;
		left: 0.5rem;
		transform: translateY(-50%);
		color: rgb(173, 173, 173);
		font-size: 1.6rem;
		pointer-events: none;
		transition: 0.5s;
	}

	.text-field__text::before {
		content: '';
		position: absolute;
		top: 4rem;
		left: 0;
		width: 0;
		height: 2px;
		background: rgb(38, 145, 217);
		transition: 0.5s;
	}

	.text-field__text::after {
		content: '';
		position: absolute;
		top: 4rem;
		left: 0;
		width: 0;
		height: 2px;
		background: rgb(38, 145, 217);
		transition: 0.5s;
	}

	.text-field__text:focus,
	.text-field__text:valid {
		color: #a3d3f2;
	}

	.text-field input:focus::before,
	.text-field input:valid::before {
		width: 100%;
	}

	.pass {
		font-size: 1rem;
		margin: -0.5rem 0 20px 5px;
		color: rgb(166, 166, 166);
		cursor: pointer;
	}

	.pass:hover {
		text-decoration: underline;
		color: rgb(38, 145, 217);
	}

	.logIn-button {
		width: 100%;
		height: 5rem;
		border: 1px solid;
		background: rgb(38, 145, 217);
		border-radius: 0.5rem;
		font-size: 1.8rem;
		font-weight: 700;
		color: rgb(233, 244, 251);
		cursor: pointer;
		outline: none;
		transition: 0.5s ease;
	}

	.logIn-button:hover {
		transition: 0.5s ease;
		transform: translateY(-1rem);
	}

	.singup_link {
		margin: 3rem 0;
		text-align: center;
		font-size: 1.4rem;
		color: rgb(102, 102, 102);
	}

	.singup_link a {
		color: rgb(38, 145, 217);
		text-decoration: none;
	}

	.singup_link a:hover {
		text-decoration: underline;
	}
</style>
