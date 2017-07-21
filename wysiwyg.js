/*
+1. Create an array of objects that represents famous people (see structure below).
+2. Create a text input in your DOM.
+3. Beneath that, create a container, block element in your DOM.
+4. Create a DOM element for each of the objects inside the container. Style your person elements however you like.
+5. For every even numbered element, have a light yellow background.
+6. For every odd numbered element, have a light blue background.
Each element's DOM structure should be as shown below.
+7. When you click on one of the person elements, a dotted border should appear around it.
+8. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
+9. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
+10. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.
*/


let celeb = [
  {
    name: 'Charlie Chaplin',
    description: 'Undisputed king of physical comedy, Charlie Chaplin changed the world by being one of the first tripple A list celebrities and making political statements',
    image:'images/charlie-chaplin.jpg',
    life:'April 16 1889 - 25 December 1977',
  },
  {
    name: 'Trevor Noah',
    description: 'Coming from apartheid South Africa to the United States, Trevor might be the comedian with the most intresting story in history. He now hosts one of the most highly rated TV shows of all time and brings a new perspective into American politics. No matter your political view, Trevor Noah deserves to be respected.',
    image:'images/Trevor.jpg',
    life:'February 20 1984 -',
  },
  {
    name: 'Robin Williams',
    description: 'The king of improv, Robin Williams touched the life of hundreds of millions. From instant classics like Good Will Hunting, to Mrs. Doubtfire, Robin will always be missed dearly.',
    image:'images/robin-williams.jpg',
    life:'July 21 1951 - August 11 2014',
  },
  {
    name: 'Louis CK',
    description: "There is a reason Louis CK's name is everywhere. Widely regarded as the hardest working comedian of all time, Louis consistantly puts out at least one show a year, produces two shows, acts in 2 shows, and apears in multiple movies a year. All of this while raising two daughters.",
    image:'images/Louis.jpg',
    life:'September 12 1967 -',
  }
];
celeb.forEach(function(item){
    document.getElementById("celebs").innerHTML += `<li class="card"><h1>${item.name}</h1> <p id="p" class="description">${item.description}</p> <img src="${item.image}"> <h3>${item.life}</h3></li>`
    
});

let counter = 0;

let outputEl = document.getElementById("ceb");

let desc = document.getElementsByClassName("description")

let containerEl = document.getElementsByClassName("card");

for (var i = 0; i < containerEl.length; i++){
  containerEl[i].addEventListener("click", function (event){
    this.classList.toggle("dot-border");
   }
  )};

let inputArea = document.getElementById("keypress-input");


for (var i = 0; i < desc.length; i++){
  desc[i].addEventListener("click", function (event){
    this.classList.toggle("focused");
   }
  )};




inputArea.addEventListener("keyup", function(event){
    console.log('event', event);
    if ($('p').hasClass('focused')){
        console.log("hi");
        var focusedElements = document.getElementsByClassName("focused");
        console.log(focusedElements[0]);
        document.getElementsByClassName("focused")[0].innerHTML = this.value;
    }
});



document.onkeydown=function(event){
    if(event.keyCode === 13){
        console.log('hi');
         inputArea.value = "";
    }
}












