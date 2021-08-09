import './shop.styles.scss';
import { useState } from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
const Shop = () => {
  const [collectionState, setCollectionState] = useState({
    collections: SHOP_DATA,
  });
  const { collections } = collectionState;
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...rest }) => (
        <PreviewCollection key={id} {...rest} />
      ))}
    </div>
  );
};

export default Shop;
