
// $(document).ready(function () {
//   $.ajax({
//     method: "post",
//     url: "http://161.97.113.89/auth/register/",
//     dataType: "json",
//     success: function (data) {
//       console.log(data);
    
//     },
//   });
// });
fetch('http://161.97.113.89/auth/register/',{
  method:'POST',
  body:JSON.stringify({
    title:'foo',
    userId:1
  }),
  headers:{
    "Content-type":"application/json; charset=UTF-8"
  }
})
.then(response =>response.json())
.then(json =>console.log(json))