import { connect } from 'react-redux';
import { setVisibility, Switches } from '../actions';
import MenuItem from '../components/MenuItem';

const mapStateToProps = (state, initialProps) => {
  return {
    active: state.currentFilter === initialProps.filterStatu,
  }
}

const mapDispatchToProps = (dispatch, initialProps) => ({
  toggleFilter: () => dispatch(setVisibility(initialProps.filterStatu))
})

const FilterMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem)

export default FilterMenu;
