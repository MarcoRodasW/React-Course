const InputForm = () => {
	function handleSubmit(event) {
		event.preventDefault();
		alert("submited");
	}
	return (
		<>
			<div className=" flex justify-center">
				<form
					onSubmit={handleSubmit}
					action=""
					className="flex flex-row justify-evenly items-center space-x-5 w-full max-w-lg"
				>
					<input
						type="text"
						placeholder="Search Pokemon"
						className="input input-bordered w-full max-w-lg"
					/>
					<button type="submit" className="btn btn-primary">
						Search
					</button>
				</form>
			</div>
		</>
	);
};

export default InputForm;
