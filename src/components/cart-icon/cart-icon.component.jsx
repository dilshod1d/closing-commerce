import './cart-icon.styles.scss';
import { AiFillShopping } from 'react-icons/ai';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <AiFillShopping className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};
const mapDispatchProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
