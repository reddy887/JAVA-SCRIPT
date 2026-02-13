// fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
// fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
// fetch("https://saurav.tech/NewsAPI/everything/cnn.json")

fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
  .then((responce) => {
    return responce.json();
  })
  .then((data) => {
    const container = document.getElementById("newscontainer");
    console.log(data);
    data.articles.map((item) => {
      const div = document.createElement("div");
      div.className = "news";
      div.innerHTML = `<h>${item.title}</h>
      <p>
        <string>Auther:</string>${item.author ?? "not available"}
      </p>
      <p><<string>Description:</string>${item.description ?? "no description"}</p>
      <small>${item.content ?? ""}</small>`;
      container.appendChild(div);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
