let start = 0;
let end = 500;
//
// fetch('../data.json')
// .then(response => response.json())
// .then(data => appendData(data))
// .catch(err => console.log(err));
async function getData(){
  let response = await fetch('../scripts/data.json');
  let data = await response.json();
  return data;
}

var data = getData();
data.then(data =>appendData(data)).catch(err => console.log(err));

function appendData(data){
  var container = document.getElementById("00-00");
  container.innerHTML = "";
  for (let i = start ; i < end; i++){
    var divOne = document.createElement("div");
    divOne.classList.add("timeStamp");
    divOne.innerHTML = data[i].timeStamp;
    container.appendChild(divOne);

    var divTwo = document.createElement("a");
    divTwo.classList.add("title");
    divTwo.innerHTML = data[i].title;
    divTwo.href = data[i].url;
    container.appendChild(divTwo);
  }
}

document.getElementById("p1").onclick = ()=>{
  start = 0;
  end = 500;
  data.then(data =>appendData(data)).catch(err => console.log(err));
};

document.getElementById("p2").onclick = ()=>{
  start = 500;
  end = 1000;
  data.then(data =>appendData(data)).catch(err => console.log(err));
};

document.getElementById("p3").onclick = ()=>{
  start = 1000;
  end = 1500;
  data.then(data =>appendData(data)).catch(err => console.log(err));
};

document.getElementById("p4").onclick = ()=>{
  start = 1500;
  end = 2000;
  data.then(data =>appendData(data)).catch(err => console.log(err));
};

document.getElementById("p5").onclick = ()=>{
  start = 2000;
  end = 2333;
  data.then(data =>appendData(data)).catch(err => console.log(err));
};

let form = document.getElementById('popup_form_wrapper');
document.getElementById('plus_button').onclick = ()=>form.style.display = "block";
document.getElementById('close_button').onclick = ()=>form.style.display = "none";
