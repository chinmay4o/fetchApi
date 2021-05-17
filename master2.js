// fetch api

var btn = document.querySelector(".btn");

btn.addEventListener("click", fetchInfo);


function fetchInfo(){
    fetch("https://api.github.com/users" )
    .then(data => data.json())
    .then(function (x) {
        
        let str = "";
        let list = document.querySelector(".content")
         for (var i in x){
            str += `<tr>
                    <td class="vc"> <img src="${x[i].avatar_url}"></td>
                    <td> Name:: ${x[i].login} <br> Type::${x[i].type}</td>
                   </tr>`
         }

         list.innerHTML = str;

    })
}




