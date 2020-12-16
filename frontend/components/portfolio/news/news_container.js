import {connect} from 'react-redux';
import { requestNews} from '../../../actions/news_action';
import News from './news'
const mapStateToProps = state => ({
    stories : state.entities.news
})

const mapDispatchToProps = (dispatch) => ({
    requestNews : ()=>dispatch(requestNews(10))
});

export default connect(mapStateToProps,mapDispatchToProps)(News)