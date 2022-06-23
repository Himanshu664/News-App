import { NEWS_API_KEY } from "./config";

export const getNewsArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&sortBy=publishedAt&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d`
  );
  const json = await response.json();
  return json;
};

export const getArticles = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  );
  const json = await response.json();
  return json;
};
