export default function Navbar() {
    return (
      <div className="sticky top-0 left-0 w-full h-12 flex items-center bg-zinc-900 shadow-[0_1px_2px_2px_rgba(0,0,0,0.5)] z-10">
        {/* Logo & Links */}
        <div className="flex items-center gap-6 px-4">
          <img
            className="w-7 h-7 cursor-pointer"
            src="https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png"
            alt="Twitch Logo"
          />
          <a href="#" className="hidden lg:flex text-white font-bold text-[18px] hover:text-purple-400">
            Siguiendo
          </a>
          <a href="#" className="hidden lg:flex font-bold text-[18px] text-purple-400">
            Explorar
          </a>
          <a href="#" className="hover:text-purple-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="white" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </a>
        </div>
  
        {/* Search bar */}
        <div className="flex-grow flex justify-center">
          <div className="lg:flex relative flex items-center w-96">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-zinc-900 text-white px-4 py-1 rounded-md w-full border border-gray-600 focus:outline-none focus:border-purple-700 hover:border-4 hover:border-purple-500 transition-all duration-200"
            />
            <div className="bg-zinc-800 flex items-center justify-center w-9 rounded-br-lg rounded-tr-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-[2.2rem] p-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div> 
          </div>
        </div>
  
        {/* User menu functions */}
        <div className="flex items-center gap-6 pr-4">
          <a href="#" className="hidden xl:flex text-white hover:text-purple-400">Twitch Prime</a>
          <img className= "w-10 cursor-pointer" src="https://gogmodteam.github.io/index_files/crown_animation_loop.gif" alt="Twitch Prime" />
        
          <button className="hidden xl:flex bg-purple-600 text-white px-4 py-1 rounded-md hover:bg-purple-700">
            Disfruta gratis sin anuncios
          </button>
          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5zRd4BbJovHymp_lnrfgCgqQB_61Plo_HQ&s"
            alt="User Avatar"
          />
        </div>
      </div>
    );
  }