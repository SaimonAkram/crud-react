
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home/Home';

import { UserProvider } from "./components/UserContext/UserContext";
import Delete from './components/Delete/Delete';
import Create from './components/Create/Create';


function App() {
  return (
    <UserProvider>
      <div className="App">


        <Routes>

          <Route path="/create" element={<Create />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/" element={<Home />} />







        </Routes>




      </div>
    </UserProvider>

  );
}

export default App;
