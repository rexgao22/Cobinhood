export const createTransaction = (transaction) =>
  $.ajax({
    url: "/api/transactions",
    method: "POST",
    data: { transaction },
  });

export const fetchTransactions = () =>
  $.ajax({
    url: "/api/transactions",
  });
