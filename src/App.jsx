import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import LiveChannels from "./components/LiveChannels";
import Browse from "./components/Browse";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <SideMenu />
        <div className="flex flex-col w-full">
          <Browse />
          <LiveChannels />
        </div>
      </div>
    </div>
  );
}
