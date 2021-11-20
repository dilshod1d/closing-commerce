import { AiFillShopping } from 'react-icons/ai';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import styled from 'styled-components';
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <IconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
  color: #fff;
`;

const ShoppingIcon = styled(AiFillShopping)`
  font-size: 30px;
  overflow: hidden;
`;
const mapDispatchProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchProps)(CartIcon);
