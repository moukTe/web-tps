const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function start() {
  const apiResponse = await fetch(apiUrl);

  try {
    const data = await apiResponse.json();
    for (let i = 0; i < 5; i++) {
      console.log(data[i]);
      let title = document.createElement("h1");
      let titleText = document.createTextNode(data[i].title);
      title.appendChild(titleText);

      let body = document.createElement("p");
      let bodyText = document.createTextNode(data[i].body);
      body.appendChild(bodyText);

      document.body.appendChild(title);
      document.body.appendChild(body);
    }
  } catch (err) {
    console.error(err);
  }
}

start();
