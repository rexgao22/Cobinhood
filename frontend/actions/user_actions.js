import * as UserUtil from '../util/user_util'
export const RECEIVE_NEW_BUYING_POWER = "RECEIVE_NEW_BUYING_POWER";

const receiveNewBuyingPower = (buyingPower) => ({
  type: RECEIVE_NEW_BUYING_POWER,
  buyingPower,
});

export const updateBuyingPower = (userId, amount) => (dispatch) => 
    UserUtil.updateBuyingPower(userId, amount).then((buyingPower) => dispatch(receiveNewBuyingPower(buyingPower)));