var rainbow = [
  '#F26C4F',
  '#FBAF5C',
  '#FFF467',
  '#ACD372',
  '#7CC576',
  '#3BB878',
  '#1ABBB4',
  '#00BFF3',
  '#438CCA',
  '#5574B9',
  '#605CA8',
  '#855FA8',
  '#A763A8',
  '#F06EA9',
  '#F26D7D'
]

// Whenever the body element is clicked,
//    For each of the span elements on the page
//      Change its style.color to the next rainbow color


document.body.onclick = funColors;

function funColors (){

  var spans = document.querySelectorAll('span');

  span.forEach(function (listItem, index){
    listItem.style.color = rainbow[index]
  })

}