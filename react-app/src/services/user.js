export const getUserCommodities = async (id) => {
    const response = await fetch(`/api/users/${id}/commodities`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  };
      