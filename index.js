const bm = document.querySelector('#bubble_machine'),
      bubble_rate = 500 //milliseconds per release

function addBubble() {
  var b = document.createElement('div')
  b.className = 'bubble'
  b.style.width = (Math.random()*100) + 28 + 'px'
  b.style.left = Math.random()*100 + '%'
  b.style.animationDuration = Math.floor(Math.random()*10) + 8 + 's'
  // b.style.filter = 'hue-rotate('+Math.random()*360+'deg)'
  b.onclick = function() {
    this.classList.add('pop_bubble')
    var pop = new Audio('http://contentservice.mc.reyrey.net/audio_v1.0.0/?id=e049b733-1543-51fd-9ce9-680f57226aa1')
    pop.play()
  }
  b.onanimationend = function() {
    this.remove()
  }  
  bm.appendChild(b)

  setTimeout(addBubble, bubble_rate)
}

addBubble()



//circle menu
var water = document.getElementsByClassName("water");




function btn1Clicked() {
 
    document.getElementById("water").style.backgroundImage = "radial-gradient(circle, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff, #c9f6ff)";

}

function btn2Clicked() {

    document.getElementById("water").style.backgroundImage = "radial-gradient(circle, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9, #ffdcf9) ";
}

function btn3Clicked() {

    document.getElementById("water").style.backgroundImage = "radial-gradient(circle, #42e9cc, #67edea, #96f0fd, #c2f2ff, #e6f5ff, #ebf7ff, #f0faff, #f5fcff, #e5fdff, #d3feff, #c1fffc, #b3fff2) ";
}
function btn4Clicked() {

    document.getElementById("water").style.backgroundImage = "radial-gradient(circle, #ffd5fb, #fed9fb, #fcddfa, #fbe0fa, #fae4f9, #f5e7fc, #f0e9fe, #ececff, #ddf0ff, #c9f6ff, #b7fbff, #b3fff2) ";
}
function btn5Clicked() {

    document.getElementById("water").style.backgroundImage = "radial-gradient(circle, #b3fff2, #c1fffc, #d3feff, #e5fdff, #f5fcff, #f5fcff, #f5fcff, #f5fcff, #e5fdff, #d3feff, #c1fffc, #b3fff2)";
}