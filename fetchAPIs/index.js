// fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
// fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
// fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    console.log(data);
    data.articles.map((items) => {
      console.log("Auther: " + items.author);
      console.log("content: " + items.content);
      console.log("description: " + items.description);
      console.log("");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
