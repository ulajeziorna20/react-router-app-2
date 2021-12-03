import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from "./components/home-page/HomePage"
import UsersList from "./components/userList/UsersList"
import Counter from "./components/counter/Counter"
import About from "./components/trial-pages/About"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="users-list" element={<UsersList />} />
          <Route path="counter" element={<Counter initValue={108} />} />
          <Route path="about" element={<About />} />
          {/* <Route path="second-home" element={<SecondHome />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
