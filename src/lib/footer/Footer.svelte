<script>
	import SocialMedia from './SocialMedia.svelte';
	import Datos from './footerData.json';
	let footerData = Datos.Elements;
</script>

<div class="footer">
	<div class="footer-content">
		<div class="footer-row">
			{#each footerData as section (section.title)}
				<div class="footer-col">
					<h4>{section.title}</h4>
					{#if section.links}
						<ul>
							{#each section.links as link (link.text)}
								<li><a href={link.url}>{link.text}</a></li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
		<div class="clearfix" />
	</div>
	<div class="social-media">
		<SocialMedia />
	</div>
</div>

<style>
	.footer {
		background-color: #fff;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 999999;
	}

	.footer > div {
		margin-top: 5rem;
	}
	.footer-content {
		width: 100%;
	}

	.footer-row {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.clearfix::after {
		content: '';
		display: table;
		clear: both;
	}

	.footer-col {
		width: calc(33.33% - 20px);
		float: left;
		padding: 0 15px;
	}

	.footer-col h4 {
		font-size: 18px;
		color: #000;
		text-transform: capitalize;
		margin-bottom: 35px;
		font-weight: 500;
		position: relative;
	}

	.footer-col h4::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: -10px;
		background-image: linear-gradient(90deg, rgb(176, 32, 229), rgb(94, 176, 208));
		height: 2px;
		box-sizing: border-box;
		width: 100%;
	}

	.footer-col ul {
		list-style: none;
		padding: 0;
	}

	.footer-col ul li {
		margin-bottom: 10px;
	}

	.footer-col ul li:not(:last-child) {
		margin-bottom: 10px;
	}

	.footer-col ul li a {
		font-size: 16px;
		text-transform: capitalize;
		color: #000;
		text-decoration: none;
		font-weight: 300;
		color: #b3b3b3;
		display: block;
		transition: all 0.3s ease;
	}

	.footer-col ul li a:hover {
		color: #000;
		padding-left: 8px;
	}

	.social-media {
		height: 100%;
		width: 60%;
		padding-bottom: 2rem;
	}
	@media (max-width: 700px) {
		.footer-col {
			width: 100%;
			margin-bottom: 3rem;
		}
	}
</style>
