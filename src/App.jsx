import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import LiveChannels from "./components/LiveChannels";
import Browse from "./components/Browse";
import BrowseCategories from "./components/BrowseCategories";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <SideMenu />
        <div className="flex flex-col w-full">
          <Browse />
          <BrowseCategories />
          <LiveChannels />
          
        </div>
      </div>
    </div>
  );
}
