export const createHolding = (userId, assetId, amount) => (
    $.ajax({
        method: "POST",
        url: "api/holdings",
        data:{holding: {user_id: userId, asset_id: assetId, amount}}
    })
);

export const deleteHolding = (holdingId) =>(
    $.ajax({
        method: "DELETE",
        url: `api/holdings/${holdingId}`,
    })
)

export const fetchHoldings = () =>
  $.ajax({
    url: "api/holdings",
  });

export const updateHolding = (holdingId, newAmount) =>
  $.ajax({
    method: "PATCH",
    url: `/api/holdings/${holdingId}`,
    data: { amount: newAmount },
  });