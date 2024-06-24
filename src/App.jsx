import Header from "./components/Header.jsx";
import Feed from "./components/Feed.jsx";
import SearchResults from "./components/SearchResults.jsx";
import VideoDetails from "./components/VideoDetails.jsx";
import { ApiContext } from "./context/contextApi.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ApiContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResults />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ApiContext>
  );
}

export default App;

