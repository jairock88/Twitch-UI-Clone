import React, { useState } from 'react';
import RecChannelsList from './RecChannelsList';
import TopChannelsList from './TopChannelsList';
import { rec_channels, top_channels } from '../data/mock-data';

export default function SideMenu() {
    const [showAllRecChannels, setShowAllRecChannels] = useState(false);
    const [showAllTopChannels, setShowAllTopChannels] = useState(false);

    const displayedRecChannels = showAllRecChannels ? rec_channels : rec_channels.slice(0, 5);
    const displayedTopChannels = showAllTopChannels ? top_channels : top_channels.slice(0, 5);

    return (
        <div className="sticky top-[42px] w-14 sm:w-16 xl:w-[15rem] h-screen bg-[#1f1f23]">
            {/* Canales Que Sigues */}
            <div className="flex items-center justify-between p-2">
                <p className="hidden xl:flex font-bold text-xs text-white">CANALES QUE SIGUES</p>
                <svg className="w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
            </div>
            <RecChannelsList 
                channels={displayedRecChannels}
                onToggleShowAll={() => setShowAllRecChannels(!showAllRecChannels)}
                showAll={showAllRecChannels}
            />
            {/* Canales Recomendados */}
            <div className="flex items-center justify-between p-2">
                <p className="hidden xl:flex font-bold text-xs text-white">CANALES RECOMENDADOS</p>
                <svg className="w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
            </div>
            <TopChannelsList 
                channels={displayedTopChannels}
                onToggleShowAll={() => setShowAllTopChannels(!showAllTopChannels)}
                showAll={showAllTopChannels}
            />
        </div>
    );
}
