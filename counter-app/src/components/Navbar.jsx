import { Link } from './Link'

export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="container mx-auto h-16 ">
          <div className="flex justify-center items-center h-full">
            <div className="space-x-4">
              <Link name={'Dashboard'} goTo="www.google.hn" />
              <Link name={'About Me'} goTo="#" />
              <Link name={'Projects'} goTo="#" />
              <Link name={'Gallery'} goTo="#" />
              <Link name={'Special Surprise'} goTo="#" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
