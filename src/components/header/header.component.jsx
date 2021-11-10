import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

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
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
