import { Counter } from './components/Counter'
import { Navbar } from './components/Navbar'
import SideBar from './components/SideBar'
export default function App() {
  const title = 'Library'
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="container mx-auto text-center">
        <h1 className="text-slate-800 text-[24px] font-bold font">
          This is the first lesson of the React {title}!!
        </h1>
      </div>
      <Counter />
    </>
  )
}
