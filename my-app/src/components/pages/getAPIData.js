export const getAPIData = async (chosenCategory) => {
    var apiKey = 'd4e4db651c9c4eb893d64dfb33c3e11e';
    var apiURL = `https://newsapi.org/v2/top-headlines?country=us&category=${chosenCategory}&apiKey=${apiKey}`;

    const response = await fetch(apiURL);
    const json = await response.json();
    return json;
}