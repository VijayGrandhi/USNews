export const getAPIData = async (chosenCategory) => {
  console.log('chose category for education.......');
  console.log(chosenCategory)
  var apiKey = "d4e4db651c9c4eb893d64dfb33c3e11e";
  var apiURL = `https://newsapi.org/v2/everything?q=${chosenCategory}&apiKey=${apiKey}`;
  // var apiURL = `https://newsapi.org/v2/top-headlines?country=us&category=${chosenCategory}&apiKey=${apiKey}`;

  const response = await fetch(apiURL);
  const json = await response.json();
  return json;
};

export const getEducationArticleAPIData = async ()=>{
  var apiKey = "pub_6777cee85ee03b801f38209fa94ee452bb47";
  var apiURL = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=colleges`

  const response = await fetch(apiURL);
  const json = await response.json();
  return json;
}

