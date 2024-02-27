let main = document.querySelector("body");
let firstDiv = document.createElement("div");
main.append(firstDiv);
firstDiv.style.width="1200px";
firstDiv.style.margin="auto";
firstDiv.style.height="70px";

var img = new Image();
img.src = "Group 1.png"; 
firstDiv.appendChild(img);

let ul = document.createElement("div");
firstDiv.append(ul);

let li =document.createElement("a");
li.innerHTML = "Home";
li.style.fontSize = "18px";
li.style.fontWeight = "bold";
ul.append(li);

let lione = document.createElement("a");
lione.innerHTML="About Us";
lione.style.fontSize = "18px";
lione.style.fontWeight= "bold";
ul.append(lione);

let litwo = document.createElement("a");
litwo.innerHTML="Blog";
litwo.style.fontSize = "18px";
litwo.style.fontWeight= "bold";
ul.append(litwo);

let lithree = document.createElement("a");
lithree.style.fontSize = "18px";
lithree.style.fontWeight= "bold";
lithree.innerHTML="Contact Us";
ul.append(lithree);

 ul.style.width="500px"
 ul.style.display="flex"
 ul.style.justifyContent="space-between"

 let but = document.createElement("div");
 but.innerHTML="Connect Now";
 but.style.fontSize="18px";
 but.style.color="white";
 but.style.background="blue";
 but.style.width="180px";
 but.style.textAlign="center";
 but.style.display="flex";
 but.style.padding="10px 25px 10px 25px";
 firstDiv.append(but);


 firstDiv.style.display="flex"
 firstDiv.style.justifyContent="space-between"
 firstDiv.style.alignItems="center"

 var imgone = new Image();
imgone.src = "Vector.png";
imgone.style.display="none" 
firstDiv.appendChild(imgone);

let sec = document.createElement("div");
main.append(sec);
sec.style.width="1200px"
sec.style.height="500px"
sec.style.alignItems="center"
sec.style.margin="auto"
sec.style.display="flex"
sec.style.marginTop="20px"

let two = document.createElement("div");
sec.append(two);
two.style.width="600px"
two.style.height="400px"

 let head = document.createElement("div");
head.innerHTML="Why Wait to Connect with your favourite People?";
head.style.width="550px";
head.style.color="#003FB9";
head.style.fontSize="50px";
two.append(head);

let phar = document.createElement("div");
phar.innerHTML="Now its easy to join your friends & family with ka-net. Download and connect seemlessly with anyone around the world. ";
phar.style.width="500px";
phar.style.fontSize="30px";
phar.style.color="#555555";
phar.style.marginTop="3rem";
two.append(phar);

let text = document.createElement("div");
two.append(text);
text.style.marginTop="3rem";
text.style.display="flex";
text.style.width="500px";
text.style.justifyContent="space-between";

let now = document.createElement("div");
text.append(now);
now.innerHTML="Download Now";
now.style.background="black";
now.style.fontSize="20px";
now.style.color="white";
now.style.width="250px";
now.style.padding="10px 5px 10px 5px";
now.style.textAlign="center";

let side = document.createElement("div");
text.append(side);
side.style.gap="40px"
side.style.display="flex"
var windo = new Image();
windo.src = "windo.png";
side.appendChild(windo);

var aihae = new Image();
aihae.src = "Aimage.png";
side.appendChild(aihae);


let three = document.createElement("div")
sec.append(three);
three.style.width="600px"
three.style.display="flex"
three.style.justifyContent="end"
three.style.height="400px"

var underimg = new Image();
underimg.src = "three-main.png"; 
underimg.style.width="500px"
underimg.style.height="400px"
three.appendChild(underimg);

let last = document.createElement("div");
main.append(last);
last.style.width="1200px";
last.style.margin="auto";
last.style.display="flex";
last.style.justifyContent="space-between";
last.style.height="50px";

let active = document.createElement("div");
last.append(active);
active.style.display="flex";
active.style.color="blue";
active.style.alignItems="end";
active.style.fontSize="40px";
active.style.gap="5px";
active.style.fontWeight="bold";
active.innerHTML="2M+";

let users = document.createElement("div");
active.append(users);
users.innerHTML="Active Users";
users.style.color="#CECBFF";
users.style.fontSize="32px";

let serv = document.createElement("div");
last.append(serv);
serv.style.display="flex";
serv.style.color="#FF6363";
serv.style.alignItems="end";
serv.style.fontSize="40px";
serv.style.gap="5px";
serv.style.fontWeight="bold";
serv.innerHTML="38K+";

let usone = document.createElement("div");
serv.append(usone);
usone.innerHTML="Servicecs";
usone.innerHTML="Active Users";
usone.style.color="#FFD7D7";
usone.style.fontSize="32px";

let laston = document.createElement("div");
last.append(laston);
laston.style.display="flex";
laston.style.color="#12E300";
laston.style.alignItems="end";
laston.style.fontSize="40px";
laston.style.gap="5px";
laston.style.fontWeight="bold";
laston.innerHTML="90K+";

let ust = document.createElement("div");
laston.append(ust);
ust.style.color="#C7FFBE";
ust.style.fontSize="32px";
ust.innerHTML="Reviews";






function checkMediaQuery() {
    if (window.matchMedia ("(max-width: 992px)").matches ){
        ul.style.display="none"
        but.style.display="none"

        imgone.style.display="flex" 

        firstDiv.style.width="992px"
        firstDiv.style.justifyContent="space-around"
        firstDiv.style.gap="37rem"

    }
    else{
        ul.style.display="flex"
        imgone.style.display="none" 
        but.style.display="flex"
    }
}
checkMediaQuery();
window.addEventListener('resize', checkMediaQuery);

