export const createTransaction = async ({ id, amount, price }) => {
  const response = await fetch(`/api/transaction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      amount,
      price,
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
