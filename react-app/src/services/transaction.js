export const createTransaction = async ({ symbol, amount, price }) => {
  //   console.log({ symbol, amount, price });
  const response = await fetch(`/api/transaction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      symbol,
      amount,
      price,
    }),
  });
  return await response.json();
};
