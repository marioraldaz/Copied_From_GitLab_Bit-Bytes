<script>
	export let profiles = [];
	console.log(profiles);
	let username = '';
	let password = '';
	let repeatPassword = '';
	function checkProfile() {
		let profile = profiles.find((profile) => profile.username == username);
		/*if (!profile) {
			return newError('Username ' + username + ' is taken');
		}
		if (username.length < 6) {
			return newError('Username must be at least 6 characters');
		} else if (username.length > 12) {
			return newError('Username must be at least 12 characters');
		} else if (password != repeatPassword) {
			return newError('Passwords do not match');
		} else if (password.length < 6) {
			return newError('Password must be at least 6 characters');
		} else if (password.length > 12) {
			return newError('Password must be at least 12 characters');
		}*/

		addProfile(username, password); //Do we need a store or just cookies?
	}

	async function addProfile(profile) {
		try {
			const newProfile = {
				ID: chooseID(), //Lets say we want to check the lowest ID possible, so if there is one in between it takes it or if not it creates the highest 1 + 1;
				username: username,
				password: password,
				savedProducts: [],
				addresses: [],
				stats: [],
				boughtProducts: [],
				saved_PC_configs: [],
				comments: [],
				returns: []
			};

			const response = await fetch('http://localhost:4000/profiles', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newProfile)
			});

			if (response.ok) {
				const result = await response.json();
				console.log('New profile added:', result);
			} else {
				console.error('Failed to add new profile:', response.statusText);
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}

	function chooseID() {
		let chosen = 1;
		profiles.sort((a, b) => a.id - b.id);

		for (let i = 1; i < profiles.length; i++) {
			if (profiles[i].id !== profiles[i - 1].id + 1) {
				return (chosen = profiles[i - 1].id + 1);
			}
		}
		return (chosen = profiles[profiles.length - 1].id + 1);
	}
</script>

<div class="container">
	<div class="center">
		<h1>Sing Up</h1>
		<form action="#" method="post">
			<div class="text-field">
				<div class="text-field__text">
					<input type="text" required bind:value={username} placeholder="Username" />
				</div>
			</div>
			<div class="text-field">
				<div class="text-field__text">
					<input
						type="password"
						bind:value={password}
						required
						name="password"
						placeholder="Password"
					/>
				</div>
			</div>
			<div class="text-field">
				<div class="text-field__text">
					<input type="password" required name="repeatPassword" placeholder="Repeat Password" />
				</div>
			</div>
			<input type="button" value="Login" on:click={checkProfile} />
			<div class="singup_link">
				Already a member? <a href="/login">Sign In</a>
			</div>
		</form>
	</div>
</div>

<style>
	.container {
		height: 100vh;
	}
	.center {
		position: absolute;
		top: 57%;
		left: 50%;
		height: 62%;
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

	input[type='submit'] {
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

	input[type='submit']:hover {
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
