import './shop.styles.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Category from '../category/category.component';
const Shop = ({ match }) => {
  console.log(match);
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Category} />
    </div>
  );
};

export default Shop;
