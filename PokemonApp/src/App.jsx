import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="container mx-auto w-screen h-screen">
			<Header />
			<InputForm />
		</div>
	);
}

export default App;
