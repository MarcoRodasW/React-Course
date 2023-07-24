import { useEffect, useState } from "react";

function PokemonCard({ pokemonUrl }) {
	const [pokemonsData, setPokemonsData] = useState(null);

	useEffect(() => {
		async function fetchPokemonData() {
			try {
				const res = await fetch(pokemonUrl);
				const data = await res.json();
				console.log("what is going on");
				setPokemonsData(data);
			} catch (error) {
				console.error("Error fetching Pokemon data:", error);
			}
		}

		fetchPokemonData();
	}, [pokemonUrl]);

	if (!pokemonsData) {
		console.log("what");
		return <span className="loading loading-dots loading-xs"></span>;
	}

	const { id, name, sprites } = pokemonsData;

	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={sprites["front_default"]} alt={name} />
			</figure>
			<div className="card-body">
				<h2 className="card-title capitalize">{name}</h2>
				<p>Number of Pokedex {id}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	);
}

export default PokemonCard;
