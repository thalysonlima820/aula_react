
import EditTask from "./components/EditTask";
import Home from "./components/Home";

import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/edit/:id/:task" element={<EditTask />} />
      </Routes>

    </>
  );
}

export default App;
