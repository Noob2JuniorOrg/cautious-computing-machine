import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
// import TipsCalculator from './pages/tipsCalculator';
// import LandingPageEz from './pages/landingPageEz';
// import { LandingPage } from './pages/landingPage';
import { GithubUserSearch } from './pages/githubUserSearch';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/"  element={<Home />}> */}
        <Route path="/" element={<Home />}>
          {/* <Route path="tips-calculator" element={<TipsCalculator />} />
          <Route path="landing-page-ez" element={<LandingPageEz />} />
          <Route path="landing-page" element={<LandingPage />} /> */}
          <Route path="github-user-search" element={<GithubUserSearch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
