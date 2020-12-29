import * as TranUtil from "../util/transection_uit";

export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";

const receiveTransaction = (transaction) => ({
  type: RECEIVE_TRANSACTION,
  transaction,
});

const receiveTransactions = (transactions) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions,
});

const receiveTransactionErrors = (errors) => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors,
});

export const createTransaction = (transaction) => (dispatch) => {
  return TranUtil.createTransaction(transaction)
    .then((transaction) => 
      dispatch(receiveTransaction(transaction)),
      (errors) => dispatch(receiveTransactionErrors(errors))
    )
};

export const fetchTransactions = () => (dispatch) => {
  return TranUtil.fetchTransactions()
    .then((transactions) => dispatch(receiveTransactions(transactions)))
    .fail((errors) => dispatch(receiveErrors(errors.responseJSON)));
};
