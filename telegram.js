let root = document.getElementById("root")
let btn = document.getElementById("sal")

btn.addEventListener('click', function() {
    let mp3 = document.createElement("audio");
    mp3.setAttribute("autoplay","autoplay");
    mp3.src = "./as.mp3"
    document.body.appendChild(mp3);
  
  })

  btn.addEventListener('click', function() {
    let  img = document.createElement("img");
    img.src = "./aaw.jpg"
    document.body.appendChild(img);
    img.style.width = "390px"

  
  })