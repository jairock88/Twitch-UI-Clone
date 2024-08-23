const games = [
    { title: 'Counter-Strike', viewers: '92.7K', tags: ['FPS', 'Shooter'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/32399-285x380.jpg' },
    { title: 'League of Legends', viewers: '158K', tags: ['FPS', 'Shooter'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg' },
    { title: 'Valorant', viewers: '134K', tags: ['Action', 'RPG', 'Shooter'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg' },
    { title: 'Fortnite', viewers: '456K', tags: ['FPS', 'Shooter'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg' },
    { title: 'Black Myth: Wukong', viewers: '200K', tags: ['RPG', 'Adventure', 'Open World'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/519291_IGDB-285x380.jpg' },
    { title: 'Overwatch 2', viewers: '76.3K', tags: ['FPS', 'Tactical Shooter'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg' },
    { title: 'World of Warfract', viewers: '15.8K', tags: ['Horror', 'Co-op'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/18122-285x380.jpg' },
    { title: 'Elden Ring', viewers: '45.2K', tags: ['Simulation', 'RPG'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg' },
    { title: 'StarCraft II', viewers: '87.4K', tags: ['Horror', 'Survival'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/490422-285x380.jpg' },
    { title: 'Apex Legends', viewers: '62.5K', tags: ['Social Deduction', 'Party'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/511224-285x380.jpg' },
    { title: 'Diablo IV', viewers: '325K', tags: ['FPS', 'Shooter'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/515024-285x380.jpg' },
    { title: 'Red Dead Redemption II', viewers: '53.1K', tags: ['RPG', 'Action', 'Rogue-like'], image: 'https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-285x380.jpg' }
];

export default function Body() {
    return (
        <div className="p-4">
            {/* Categories Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <span className="cursor-pointer text-xl font-bold px-2 text-purple-400">Categorías</span>
                    <span className="cursor-pointer text-xl font-bold px-2 text-gray-300">Canales en vivo</span>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 ml-auto">
                    <input 
                        type="text" 
                        placeholder="Buscar etiquetas de categoría" 
                        className="px-4 py-2 mb-4 md:mb-0 rounded-md bg-zinc-800 text-white outline-none" 
                    />
                    <div className="relative">
                        <select className="px-4 py-2 rounded-md bg-zinc-800 text-white cursor-pointer">
                            <option>Recomendado para ti</option>
                            <option>Más vistos</option>
                            <option>Nuevos</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Game Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {games.map((game) => (
                    <div key={game.title} className="relative w-full h-60">
                        {/* Contenedor de fondo morado */}
                        <div className="absolute inset-0 bg-[#5c16c5] z-0"></div>

                        {/* Imagen del juego */}
                        <img 
                            src={game.image} 
                            alt={game.title} 
                            className="relative w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:-translate-y-2 z-10 cursor-pointer"
                        />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-2 z-10 bg-gradient-to-t from-black via-black to-transparent">
                            <h3 className="text-sm font-bold text-white">{game.title}</h3>
                            <p className="text-xs text-gray-400">{game.viewers} viewers</p>
                            <div className="flex space-x-1 mt-1">
                                {game.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-zinc-800 text-xs rounded-md px-2 py-0.5 text-white truncate max-w-[6rem]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
