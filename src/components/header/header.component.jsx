import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img src={Logo} alt='logo' className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          DO'KON
        </Link>
        <Link to='/contact' className='option'>
          BOG'LANISH
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            CHIQISH
          </div>
        ) : (
          <Link to='/kirish' className='option'>
            KIRISH
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
