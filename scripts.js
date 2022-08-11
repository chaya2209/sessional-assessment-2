let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
table.setAttribute("border", "solid");

document.getElementById('my-class').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Title";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Description";


  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  
  thead.appendChild(row_1);

document.querySelector("form.searchbox").addEventListener("submit", (e) => {
  
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
              /*temp += `
                  
                  <div class="blog-items">
                      
                     <p style="color:black;">"Title"</p>
                      <p style="color: gray;">${res[i].title}</p>
                     <p style="color:black;">"Body"</p>
                      <p style="color: gray;">${res[i].body}</p>

                  </div>
                  
              `*/
                  let row_2 = document.createElement('tr');
                  let row_2_data_1 = document.createElement('td');
                  //row_2_data_1 .width = '500px';
                  row_2_data_1.innerHTML = res[i].title;
                  let row_2_data_2 = document.createElement('td');
                 // row_2_data_2 .width = '500px';
                  row_2_data_2.innerHTML = res[i].body;
                  

                  row_2.appendChild(row_2_data_1);
                  row_2.appendChild(row_2_data_2);
                 
                  tbody.appendChild(row_2);
          }
          
          //document.querySelector('#my-container').innerHTML = temp
      }
  }
  

  xhr.send();
  //document.querySelector('my-class').innerHTML="";
 // document.getElementById('my-class').appendChild("");
  
});
