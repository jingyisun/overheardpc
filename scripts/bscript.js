async function getData(){
  let response = await fetch("../scripts/user_data.json");
   let data = await response.json();
   return data;
}

var data = getData();
data.then(data =>appendData(data)).catch(err => console.log(err));

function appendData(data){
  var container = document.getElementById("b00-00");
  container.innerHTML = "";
  for (let i = 0 ; i < data.length; i++){
    var divOne = document.createElement("div");
    divOne.classList.add("form_title");
    divOne.innerHTML = data[i].form_title;
    container.appendChild(divOne);

    var divTwo = document.createElement("div");
    divTwo.classList.add("form_content");
    divTwo.innerHTML = data[i].form_content;
    container.appendChild(divTwo);
  }
}
