
import Protfolio from './portfolio';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>({ 
    buyingPower: state.session.currentUser.buyingPower
})

export default connect(mapStateToProps,null)(Protfolio);