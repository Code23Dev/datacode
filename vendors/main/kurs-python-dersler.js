let url = window.location.search;
let course_id = url.replace(/[^0-9\.]+/g, "");
let x = 'kurs-python-dersler.html?course_id=' + course_id
let course_topic_id = 7
let y = 'kurs-python-dersler.html?course_id=' + course_id + '+course_topic_id' + course_topic_id



let subTopicContentArr = [];
let topicId

let slidePos = 0;
let slideData = []


function getCourse() {

  return new Promise((resolve, reject) => {

    fetch('http://161.97.113.89/api/v1/topic/')
      .then(data => {
        resolve(data.json());
      })
      .catch(err => reject(err))
  })
}


function makeTopics(topicList) {

  console.log(topicList);
  let coursetopicdata = document.getElementById('coursetopicdata')
  for (let i = 0; i < topicList.length; i++) {
    out = []
    let p = topicList[i].paraqraf
    for (const n in p) {
      let subtopiclist = `<input type="checkbox" id="checkboxIdslect" data-id="${p[n].id}"  class="padding_element"><i class="fa fa-lock" id="lockidaddclas" ></i>${p[n].name}<br>`

      out.push(subtopiclist)
    }
    subTopicContentArr.push(p);
    coursetopicdata.innerHTML +=
      `<button class="accordion" id="dataAccardionname1" data-id="${i}">${topicList[i].name}</button>
            <div class="panel_2">
              <div class="container-fluid" style="padding-top:5px">
                <div class="row">
                  <div class="col" id=" datacorse2">${out.join(' ')}</div>
                </div>
              </div>
            </div>
            `
  }

  console.log(subTopicContentArr);
  // console.log(subTopicContentArr[0][1].topic_content[0].text)
}


function slideArray(id) {

  subtopicdata = subTopicContentArr[id]
  for (let i = 0; i < subtopicdata.length; i++) {
    slideData.push(subtopicdata[i].topic_content[0])
  }
  makeSlide()
}

function makeSlide() {
  $('.input_corse_h1').html(slideData[slidePos].title);
  $('.input_corse_p').html(slideData[slidePos].text);  

}

function nextSlide() {
  slidePos++
  makeSlide();
}

function prevSlide() {
  slidePos--
  makeSlide();
}

getCourse().then(data => {
  makeTopics(data)
})




//accordion toggle jquery
$(document).ready(function () { //  <--gozleyir ki accordion yuklensin

  //getting topic id
  $(document).on("click", ".accordion", function () {
    topicId = $(this).attr('data-id')
    console.log(topicId);
    slideArray(topicId)
  });

  $(document).on("click", ".nextSlide", function () {
    nextSlide();
    console.log(slidePos)
  })

  // yuklendikden sonraki action
  $(document).on("click", ".accordion", function () {
    this.classList.toggle("cole");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});