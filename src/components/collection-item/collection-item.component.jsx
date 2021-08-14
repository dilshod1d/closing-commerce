import './collection-item.styles.scss';
import Button from '../button/button.component';
import { connect } from 'react-redux';
import { AddItemToCart } from '../../redux/cart/cart.actions';
const CollectionItem = ({ item, AddItemToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick={() => AddItemToCart(item)} inverted>
        Savatga qo'shish
      </Button>
    </div>
  );
};

const mapDispatchProps = (dispatch) => ({
  AddItemToCart: (item) => dispatch(AddItemToCart(item)),
});

export default connect(null, mapDispatchProps)(CollectionItem);
