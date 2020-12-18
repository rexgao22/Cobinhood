export const updateBuyingPower =(userId, BPChange) =>(
    $.ajax({
        method: 'PATCH',
        url: `api/users/${userId}`,
        data: {buingPower: BPChange}
    })
);