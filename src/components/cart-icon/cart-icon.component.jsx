import './cart-icon.styles.scss';
import { AiOutlineShopping } from 'react-icons/ai';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <AiOutlineShopping className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};
const mapDispatchProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchProps)(CartIcon);
