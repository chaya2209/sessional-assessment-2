document.querySelector("form.searchbox").addEventListener("submit", (e) => {
 /* e.preventDefault();
  const xhr = new XMLHttpRequest();
  const data_search = document.querySelector("#data-input").value;
  const url = `https://jsonplaceholder.typicode.com/posts?title=${data_search}`;
  //  console.log(searchValue);
  xhr.open("GET", url, true);
  let text = "";

  var array = {};


  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      //console.log(JSON.parse(xhr.responseText));

      const res = JSON.parse(xhr.responseText);
      array = {...res};
      var array_length = Object.keys(array).length;
      let temp=''
      for(let i=0;i<array_length;i++)
      {
        temp += `
        <div class="blog-items" style="width: 20%; margin: 1.2em;">
            <p style="color: gray">${array[i].title}</p>
            <p style="color: gray">${array[i].body}</p>
        </div>
    `

      }
      
      document.querySelector('my-container').innerHTML = '<p> temp </p> ';
    }
  };*/
  e.preventDefault();

  const xhr = new XMLHttpRequest();
  const data_search = document.querySelector("#data-input").value;
  const url = `https://jsonplaceholder.typicode.com/posts?title=${data_search}`;
  xhr.open('GET',url, true);
  let temp = '';


  xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {

          const res = JSON.parse(xhr.responseText);
          // console.log(response)

          for(let i=0; i < res.length; i++) {
              temp += `
                  
                  <div class="blog-items">

                      <p style="color: gray;">${res[i].title}</p>
                      <p style="color: gray;">${res[i].body}</p>

                  </div>
                  
              `
          }
          
          document.querySelector('#my-container').innerHTML = temp 
      }
  }


  xhr.send();
});
