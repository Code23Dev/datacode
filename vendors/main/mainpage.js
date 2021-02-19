
const elementdata=document.querySelector('#Feature_id');
const text=document.querySelector('#text-card');
fetch('http://161.97.113.89/api/v1/course/')
  .then((response) => response.json())
  .then((json) =>{
    let cs='kurs-python.html?course_id=1'
    function datakurs(){
      location.href= 'kurs-python.html?course_id=1'}

    for(let i=0;i<json.length;i++){
      let x='kurs-python.html?course_id='+json[i].id
      console.log(x)
      elementdata.innerHTML +=`
      <div class="col-md-3">
      <a href=${x}>
        <img src="${json[i].photo}" alt="">
        <div class="decim">${json[i].name}</div>
        <div class="decim">${json[i].description}</div>
      </a>
    </div>
      `
      console.log(json[i])
    }
  });

