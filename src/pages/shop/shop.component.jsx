import './shop.styles.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Category from '../category/category.component';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/withSpinner';
import { useState } from 'react';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CategoryWithSpinner = withSpinner(Category);
const Shop = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);
  let unsubscribeFromSnapshot = null;
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
    return () => {
      unsubscribeFromSnapshot();
    };
  }, []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CategoryWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
