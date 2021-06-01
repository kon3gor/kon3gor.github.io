const cards = document.getElementsByClassName("card")
const cardContainers = document.getElementsByClassName("cardContainer")

for (var i = 0; i < cards.length; i++) {
  const card = cards[i]
  const cardContainer = cardContainers[i]

  cardContainer.addEventListener("mousemove", (e)=>{
    console.log("here")
    let xAxis = (cardContainer.offsetWidth/2 - e.pageX/4)/3
    let yAxis = (cardContainer.offsetHeight/2 - e.pageY/4)/3
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg) scale(1.2)`
  })

  cardContainer.addEventListener("mouseleave", (e)=>{
    card.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`
  })
}

$(document).ready(()=>{
  $("#mail").click(()=>{
    window.location.href = "mailto:kon3gor@gmail.com";
  })
})
