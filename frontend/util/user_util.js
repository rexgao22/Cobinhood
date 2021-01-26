export const updateBuyingPower = (userId, amount) =>{
  console.log("yes", userId)
return  $.ajax({
    url: `/api/users/${userId}`,
    method: "PATCH",
    data: { amount },
  })
};
