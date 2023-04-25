export default function getData(country,api_key,category,pageSize,page){
   return  fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}&category=${category}&pageSize=${pageSize}&page=${page}`
  );

}