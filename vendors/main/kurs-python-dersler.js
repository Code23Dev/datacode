
let url =window.location.search;
let course_id = url.replace(/[^0-9\.]+/g, "");
let x='kurs-python-dersler.html?course_id='+course_id


fetch('http://161.97.113.89/api/v1/topic/?course_id='+course_id)
  .then((response) => response.json())
  .then((json) => {
    for(let i=0;i<json.length;i++){
      let bv=json[i].id
      let br=json[i].name
      let coursetopicdata=document.getElementById('coursetopicdata')

      fetch('http://161.97.113.89/api/v1/pod_topic/?topic_id='+bv)
      .then((response) => response.json())
      .then((data) =>{ 
        let out=[]
        let fgf=document.getElementById("fgf")
        data.forEach(element => out.push(`${element.name}`));
        // for(let t=0;t<out.length;t++){ console.log(out[t])}
          coursetopicdata.innerHTML+=
          `
          <button class="accordion" id="dataAccardionname1">${br}</button>
          <div class="panel_2">
            <div class="container-fluid" style="padding-top:5px">
              <div class="row">
                <div class="col-3 cheachboxclass">
                  <input type="checkbox" id="checkboxId" onclick="clickCheckbox2()" class="padding_element"></div>
                <div class="col-6" id="datacorse2">${out}</div>
              </div>
            </div>
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


  var i = 0,images = ["http://161.97.113.89/api/v1/content/?topic_id="+24];
                            
  function mySlide(param)
  {
      if(param === 'next')
      {
          i++;
          
          if(i === images.length){ i = images.length - 1; }
      }else{
          i--;
          if(i < 0){ i = 0; }
      }
      fetch(images[i])
  .then((response) => response.json())
  .then(function (json) {
    document.getElementById('slide').innerHTML = json[0].id;
    document.getElementById('slide1').innerHTML = json[0].text;

})
  }



