document.querySelector("form.searchbox").addEventListener("submit", (e) => {
  e.preventDefault();
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
      var div_create=document.createElement("div");
      div_create.style.width = "auto";
      div_create.style.height = "auto";
      div_create.style.background = "red";
      div_create.style.color="black"
      div_create.color = "white";
      
      div_create.innerHTML="Title"
      div_create.innerHTML=array[0].title;
      div_create.innerText=array[0].body;
      //document.querySelector("body").innerHTML = div;
      document.getElementById("body").appendChild(div_create)
      
      
     

      /*let row_2 = document.createElement('tr');
      let row_2_data_1 = document.createElement('td');
      row_2_data_1.innerHTML = array[0].title;
      let row_2_data_2 = document.createElement('td');
      row_2_data_2.innerHTML = array[0].body;
      

      row_2.appendChild(row_2_data_1);
      row_2.appendChild(row_2_data_2);
      tbody.appendChild(row_2);*/

      //document.getElementById('body').appendChild(table);
     // document.querySelector("#Home").innerHTML = table;
    }
  };

  xhr.send();
});
