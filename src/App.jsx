import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import LiveChannels from "./components/LiveChannels";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <SideMenu />
        <LiveChannels />
      </div>
    </div>
  );
}

export default App;
