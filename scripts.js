document.querySelector("form.searchbox").addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const data_search = document.querySelector("#data-input").value;
  const url = `https://jsonplaceholder.typicode.com/posts?title=${data_search}`;
  //  console.log(searchValue);
  xhr.open("GET", url, true);
  let text='';
  var array={};
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      //console.log(JSON.parse(xhr.responseText));
      
      const res=JSON.parse(xhr.responseText);
      array={...res}
      console.log(array[0].title);
      console.log(array[0].body);
      

    }
  };

  xhr.send();
});
