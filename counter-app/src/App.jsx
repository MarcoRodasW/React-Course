import { Counter } from "./components/Counter";
export default function App() {
  const title = "Library";
  return (
    <>
      <div className="flex items-center justify-center mt-4">
        <h1 className="text-slate-800 text-[24px] font-bold font">
          This is the first lesson of the React {title}!!
        </h1>
      </div>
      <Counter />
    </>
  );
}
