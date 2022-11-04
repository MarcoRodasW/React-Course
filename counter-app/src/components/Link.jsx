export const Link = ({ name, goTo }) => {
  return (
    <>
      <a
        href={goTo}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {name}
      </a>
    </>
  )
}
