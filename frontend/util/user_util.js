export const updateBuyingPower = (userId, amount) =>{
return  $.ajax({
    url: `/api/users/${userId}`,
    method: "PATCH",
    data: { amount },
  })
};
