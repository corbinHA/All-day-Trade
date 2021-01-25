export const getCommodity = async({ symbol } ) => {

  const response = await fetch(`/api/commodity/${symbol}`,{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
};
