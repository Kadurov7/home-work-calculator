import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions,} from '../store/auth/authSlice';


const Header = () => {

  const dispatch = useDispatch();

  const {isAuthorized} = useSelector((state)=> state.auth);
  console.log("HEADER", isAuthorized);

  const logoutHandler = ()=>{
    dispatch(authActions.logout())
  }
  
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      { isAuthorized && (
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
     )}
    </header>
  );
};

export default Header;
