import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Pokemons from "./components/Pokemons";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="container mx-auto w-screen h-screen">
			<Header />
			<InputForm />
			<Pokemons />
		</div>
	);
}

export default App;
