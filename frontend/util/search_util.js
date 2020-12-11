export const assetSearch = (queryString) =>
  $.ajax({
    url: `/api/assets/search/${queryString.toLowerCase()}`,
    method: "GET",
  });
