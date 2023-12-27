<script>
	import Caroussel from './Caroussel.svelte';
	import { getComponents, getOffers, getProducts } from '../../stores/products.js';

	let bodyCaroussels = [
		{
			products: getOffers(),
			mainImg: 'src/lib/body/images/offer-removebg-preview.png'
		},
		{
			products: getComponents('Motherboard'),
			mainImg: 'http://localhost:4000/MSImortar.jpg'
		},
		{
			products: getComponents('CPU'),
			mainImg: 'http://localhost:4000/MSImortar.jpg'
		},
		{
			products: getComponents('RAM'),
			mainImg: 'http://localhost:4000/MSImortar.jpg'
		},
		{
			products: getComponents('SSD'),
			mainImg: 'http://localhost:4000//MSImortar.jpg'
		},
		{
			products: getComponents('GPU'),
			mainImg: 'http://localhost:4000//MSImortar.jpg'
		}
	];
</script>

<div class="cuerpo">
	<div class="gradiente_img_cabecera">
		<img
			class="img_encabezado"
			src="/src/lib/body/images/componentes_cabecera.png"
			alt="componentes"
		/>
	</div>
	{#each bodyCaroussels as bodyCaroussel}
		<div class="cuerpo__caroussel">
			<Caroussel mainImg={bodyCaroussel.mainImg} products={bodyCaroussel.products} />
		</div>
	{/each}
</div>

<style lang="scss">
	.gradiente_img_cabecera {
		background: linear-gradient(to bottom, #333333, #007acc);
		clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
		border-radius: 15px;
		margin-top: 3rem;
		text-align: center;
	}
	.img_encabezado {
		width: 40%;
	}

	.cuerpo {
		margin-top: 9rem;
		overflow: hidden;
		width: 100%;
		height: fit-content;
		&__caroussel {
			margin-top: 3rem;
			width: 95%;
			height: 40rem;
			margin-bottom: 10rem;
			position: relative;
			left: 2.5%;
		}
	}
</style>
