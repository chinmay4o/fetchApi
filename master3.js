async function getMe(){
   var response3 = await fetch("https://api.github.com/users");
  
   var data3 = await response3.json();

  //  console.log(data3);

   return data3;
}

getMe().then(d => {
  console.log(d);

  d.forEach((elem) => {
    list.innerHTML += `<li> ${elem.login}</li>`
  })
  

})
