export const getWatchlist = async () => {
    const response = await fetch(`/api/watchlist/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };