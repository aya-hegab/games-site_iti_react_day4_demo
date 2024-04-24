import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  // FUNCTIONS
  // HOOKS
  const counter_val = useSelector(state => state.counter.counter_val)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Games App</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Games</Link>
            <Link className="nav-link" to="/add-game">Add Game</Link>
            <Link className="nav-link" to="/counter">Counter : {counter_val}</Link>
            <Link className="nav-link" to="/contact-us">Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;