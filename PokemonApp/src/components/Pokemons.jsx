import { id, name, sprites } from "../mockups/PokemonsList.json";

export default function Pokemons() {
	return (
		<>
			<main className="mx-10">
				<div class="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img src={sprites.front_default} alt={name} />
					</figure>
					<div class="card-body">
						<h2 class="card-title">{name}</h2>
						<p>Number of Pokedex {id}</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
