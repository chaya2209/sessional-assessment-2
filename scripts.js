document.querySelector("form.searchbox").addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const data_search = document.querySelector("#data-input").value;
  const url = `https://jsonplaceholder.typicode.com/posts?title=${data_search}`;
  //  console.log(searchValue);
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(JSON.parse(xhr.responseText));
    }
  };

  xhr.send();
});
