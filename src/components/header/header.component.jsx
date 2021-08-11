import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
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
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
