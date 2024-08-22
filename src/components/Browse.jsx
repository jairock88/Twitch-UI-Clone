const browse = [
    { name: 'Juegos', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg' },
    { name: 'IRL', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg' },
    { name: 'Música y DJ', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg' },
    { name: 'Creative', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg' },
    { name: 'Esports', icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg' }
];

export default function Browse() {
    return (
        <div className="text-white pl-6 w-full flex-grow">
            {/* Header */}
            <h1 className="text-[3.2rem] font-bold mb-6">Explorar</h1>

            {/* Tabs */}
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 mb-6 mr-4">
                {browse.map((category, index) => (
                    <div key={index} className="flex items-center px-4 py-2 rounded-md bg-[#5c16c5] hover:bg-[#5a2e9b] cursor-pointer w-43 h-12">
                        <img className="mr-2" src={category.icon} alt={category.name} />
                        <span className='font-bold text-[1.3rem]'>{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
