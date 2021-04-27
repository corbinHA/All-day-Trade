export const createTransaction = async ({ id, amount, price, buy_sell}) => {
  const response = await fetch(`/api/transaction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      amount,
      price,
      buy_sell,
    }),
  });
  return await response.json();
};

export const getTransactions = async ({ id }) => {
  const response = await fetch(`/api/transaction/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

// export const sellTransaction = async ({ id }) => {
//   const response = await fetch(`/api/transaction/${id}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       id,
//     }),
//   });
//   return await response.json();
// };