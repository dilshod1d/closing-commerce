import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Category from './category.component';
import withSpinner from '../../components/with-spinner/withSpinner';

import { selectIsCategoryLoaded } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCategoryLoaded(state),
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Category);

export default CategoryContainer;
