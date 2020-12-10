export const updateBuyingPower =(userId, BPChange) =>(
    $.ajax({
        method: 'PATCH',
        url: `api/user/${userId}`,
        data: {buingPower: BPChange}
    })
);