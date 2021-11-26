import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsFetching } from '../../redux/shop/shop.selector';
import withSpinner from '../with-spinner/withSpinner';
import CollectionOverview from './collection-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   withSpinner(CollectionOverview)
// );

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
