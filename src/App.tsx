import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/calls'} element={<div>test</div>}/>
        <Route path="*" element={<Navigate to={'/calls'} replace/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
