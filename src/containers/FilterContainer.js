import { connect } from 'react-redux';

import VisibilityFilter from '../components/VisibilityFilter';
import { showAll, showOpen, showComplete } from '../actions';


let all;
let complete;
let open;
const filters = ['All', 'Open', 'Complete'];

const onLinkClick = (linkValue) => {
    switch (linkValue) {
        case 'All':
            all();
            break;

        case 'Open':
            open();
            break;

        case 'Complete':
            complete();
            break;

        default:
    }
};

const mapStateToProps = () => ({
    filters,
});

const mapDispatchToProps = (dispatch) => {
    all = () => dispatch(showAll());
    open = () => dispatch(showOpen());
    complete = () => dispatch(showComplete());
    return { onLinkClick };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);
