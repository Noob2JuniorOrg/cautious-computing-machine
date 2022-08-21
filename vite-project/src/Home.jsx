import { Link, Outlet } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div>Lading page</div>
      <Link to={'/'}>Home</Link>
      <Link to={'tips-calculator'}>Tips Calculator</Link>
      <Link to={'landing-page-ez'}>Landing Page Ez</Link>
      <Link to={'landing-page'}>Landing Page</Link>
      <Link to={'github-user-search'}>Github User Search</Link>
      <Outlet />
    </div>
  );
}

export default Home;
