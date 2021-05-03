export const getUserCommodities = async (id) => {
    const response = await fetch(`/api/users/${id}/commodities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };
      
export const getUsersWatchlist = async (id) => {
  const response = await fetch(`/api/users/${id}/watchlist`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const addToWatchlist = async ({ id, commodity_id }) => {
  const response = await fetch(`/api/users/${id}/watchlist`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      commodity_id,
    }),
  });
  return await response.json();
};

export const removeFromWatchlist = async ({ id, commodity_id }) => {
  const response = await fetch(`/api/users/${id}/watchlist`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      commodity_id,
    }),
  });
  return await response.json();
};