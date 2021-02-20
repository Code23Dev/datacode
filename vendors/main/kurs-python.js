
let url =window.location.search;
let course_id = url.replace(/[^0-9\.]+/g, "");
let x='kurs-python-dersler.html?course_id='+course_id


fetch('http://161.97.113.89/api/v1/topic/?course_id='+course_id)
  .then((response) => response.json())
  .then((json) => {
    for(let i=0;i<json.length;i++){
      let bv=json[i].id
      let br=json[i].name
      let coursetopic=document.getElementById('coursetopic')

      fetch('http://161.97.113.89/api/v1/pod_topic/?topic_id='+bv)
      .then((response) => response.json())
      .then((data) =>{ 
        let out=[]
        let fgf=document.getElementById("fgf")
        data.forEach(element => out.push(`${element.name}`));
        console.log(out)
          coursetopic.innerHTML+=
          `
          <button class="accordion" id="dataAccardionname1">${br}</button>
          <div class="panel" >
          <div class="row" style="padding: 5px 16px; width: 600px">
            <div class="col-1"><img src="./img/courses/movzular.svg" alt="" class="img-card"></div>
            <div class="col-5" id="hhhhhh">${out}<br><a class="paner_into_button" href="${x}">Bax</a></div>       
          </div>
          <hr>
          </div>
          `


        var acc = document.getElementsByClassName("accordion");
        var i;
    
        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("cole");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        });
        }
      });
     
    }




  });





