
let url =window.location.search;
let course_id = url.replace(/[^0-9\.]+/g, "");
let x='kurs-python-dersler.html?course_id='+course_id


fetch('http://161.97.113.89/api/v1/topic/?course_id='+course_id)
  .then((response) => response.json())
  .then((json) => {
    let hjhjh=document.getElementById("hjhjh")
    hjhjh.addEventListener("click", function(e){
     document.getElementById("demo").innerHTML = "Hello World!";
     e.preventDefault();
   });
    for(let i=0;i<json.length;i++){
      let bv=json[i].id
      let br=json[i].name
      let coursetopicdata=document.getElementById('coursetopicdata')

      fetch('http://161.97.113.89/api/v1/pod_topic/?topic_id='+bv)
      .then((response) => response.json())
      .then((data) =>{ 
        let out=[]
       

        let fgf=document.getElementById("fgf")
        data.forEach(gh=>{

        })
        data.forEach(element => out.push(`<input type="checkbox" id="checkboxIdslect" data-id="${element.id}" onclick="clickCheckbox2()" class="padding_element"><i class="fa fa-lock" id="lockidaddclas" ></i>${element.name}<br>`));
          coursetopicdata.innerHTML+=
          `
          <button class="accordion" id="dataAccardionname1">${br}</button>
          <div class="panel_2">
            <div class="container-fluid" style="padding-top:5px">
              <div class="row">
                <div class="col" id="datacorse2">${out.join(' ')}</div>
              </div>
            </div>
          </div>
          `
       
        // ------------------next-prev-button
         
        let next_prev_button=document.getElementById('next_prev_button');
        next_prev_button.innerHTML=`
        <a href="" id="clickButton_input" onclick="mySlide('prev');" class="paner_into_button">Əvvəlki</a>
        <a href=""id="clickButton_input" onclick="mySlide('next');" class="paner_into_button">Növbəti</a>       
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

  
  
