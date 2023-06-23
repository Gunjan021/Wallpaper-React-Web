import "./App.css";
// import Card from "./component/Card";
import Navigation from "./component/Navigation";
import Advertisement from "./component/Advertisement";
import WallpaperCard from "./component/WallpaperCard";
import ContactUs from "./component/ContactUs";

const wa = [
  {
    image: "jdfn",
    name: "nfnfs",
  },
  {
    image: "jdfn",
    name: "nfnfs",
  },
];

function App() {
  console.log(wa);
  return (
    <div className="App scrollbar-hide bg-stone-500">
      {/* {wa.map((item)=>{
        return <Card data={item}/>
      })} */}
      <Navigation></Navigation>
      <Advertisement></Advertisement>
      <WallpaperCard></WallpaperCard>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
