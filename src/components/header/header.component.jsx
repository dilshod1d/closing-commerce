import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';
import styled from 'styled-components';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <Container>
      <LogoContainer to='/'>
        <LogoImg src={Logo} alt='logo' />
      </LogoContainer>
      <NavContainer>
        <Nav to='/shop'>DO'KON</Nav>
        <Nav to='/contact'>BOG'LANISH</Nav>
        {currentUser ? (
          <Nav as='div' onClick={signOutStart}>
            CHIQISH
          </Nav>
        ) : (
          <Nav to='/kirish'>KIRISH</Nav>
        )}
        <CartIcon />
      </NavContainer>
      {hidden ? null : <CartDropdown />}
    </Container>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: auto;
`;

const LogoContainer = styled(Link)`
  height: auto;
  width: 200px;
  padding: 25px;
`;

const LogoImg = styled.img`
  background-size: cover;
  width: 200px;
  height: auto;
`;

const NavContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Nav = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
