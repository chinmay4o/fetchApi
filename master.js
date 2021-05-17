var button = document.querySelector(".btn");

button.addEventListener("click", getData);

function getData() {
    button.style.display = "none";
  var xhr = new XMLHttpRequest();

  var url = "https://api.github.com/users";
  xhr.open("GET", url, true);

  xhr.onload = function () {
    var data = JSON.parse(this.response);
    var list = document.querySelector(".content");
    if (this.status === 200) {
      var str = "";

      for (var i in data) {
        str += `<tr>
                          <td class="vc"> <img src="${data[i].avatar_url}" alt=""> </td> 
                          <td> Name: ${data[i].login} <br>Type:  ${data[i].type}</td> 
                          </tr>`;
      }

      list.innerHTML = str;
    }
  };

  xhr.send();
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>

var text1 = document.querySelector("input");

text1.addEventListener("keyup", function(e){
    var value1 = text1.value.toLowerCase();
    
    searchData(value1);
});





function searchData(value) {
  var xhr = new XMLHttpRequest();
  var url = "https://api.github.com/users";
  xhr.open("GET", url, true);

  xhr.onload = function () {
    var data1 = JSON.parse(this.response);
    var list = document.querySelector(".content");

    console.log(value);

    list.innerHTML = "";
    var str1 = " ";
    for (var j in data1) {
      var namee = data1[j].login.toLowerCase();

      if (namee.includes(value)) {
        str1 += `<tr>
            <td class="vc"> <img src="${data1[j].avatar_url}" alt=""> </td> 
            <td> Name: ${data1[j].login} <br>Type:  ${data1[j].type}</td> 
            </tr>`;
      }
    }

    return list.innerHTML = str1;
    
    
  };

  xhr.send();
}
