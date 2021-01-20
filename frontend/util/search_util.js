export const assetSearch = (searchInput) =>
  $.ajax({
    url: `/api/assets/search/${searchInput.toLowerCase()}`,
    method: "GET",
  });
