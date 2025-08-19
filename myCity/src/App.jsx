
import CityContext from "./context/CityContext";
import Description from "./pages/home/DescriptionOfCity";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FamouseLandmark from "./pages/landmarks/famousLandmark.jsx";
import Gallery from "./pages/gallery/photos.jsx";
import Header from "./pages/Header.jsx";
import OtherLandmark from "./pages/landmarks/OtherLandmark.jsx";
import AddPhoto from "./pages/gallery/AddPhotoForm.jsx";

function App() {

  return (
    <BrowserRouter>
      <CityContext>
        <Header/>
        <Routes>
          <Route path="home" element={<Description/>}/>
          <Route path="landmarks" element={<FamouseLandmark/>}>
            {/* <Route
                path="otherlandmarks"
                element={<OtherLandmark/>}/> */}
          </Route>
          <Route path="landmarks/otherlandmarks" element={<OtherLandmark/>}/>
          <Route path="gallery/*" element={<Gallery/>}>
              <Route path="addPhoto"
              element={<AddPhoto/>}/>
          </Route>
        </Routes>
      </CityContext> 
    </BrowserRouter>   
  )
}

export default App;
