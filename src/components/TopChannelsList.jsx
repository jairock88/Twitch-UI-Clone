export default function TopChannelsList ({ channels, onToggleShowAll, showAll }) {
    return (
        <>
            {channels.map((item, index) => (
                <div key={index} className='w-full inline-flex items-center p-2 hover:bg-neutral-800 transition-colors duration-200 ease-in-out cursor-pointer'>
                    <div>
                        <img src={item.avatar} alt={item.username} width='50' className="rounded-full"/>
                    </div>
                    <div className='hidden xl:flex flex-col justify-between w-full ml-3'>
                        <div className="flex items-center justify-between w-full">
                            <span className="text-sm text-white">{item.username}</span>
                            <div className="flex items-center">
                                <span className="w-2.5 h-2.5 bg-red-600 rounded-full mr-2"></span>
                                <span className="text-xs text-gray-100">{item.viewers}</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 truncate max-w-[7rem]">{item.game_name}</p>
                    </div>
                </div>
            ))}
            <div className="p-2">
                <button 
                    className="text-purple-400 text-xs hover:text-purple-600"
                    onClick={onToggleShowAll}
                >
                    {showAll ? "Mostrar menos" : "Mostrar más"}
                </button>
            </div>
        </>
    );
};