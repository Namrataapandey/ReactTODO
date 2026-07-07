
const Navbar = () => {
  return (
    <nav className="flex justify-between bg-linear-to-r  via-purple-400 to-cyan-500 from-pink-400  text-white py-1.5">
     <div className="logo">
            <span className="font-bold text-xl mx-9  ">iTodo</span>
        </div>

      <ul className="flex gap-8 mx-9 ">
        
        <li className="cursor-pointer hover:font-bold transition-all duration-50">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all duration-50">Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar