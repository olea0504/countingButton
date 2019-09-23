const myH1 = document.getElementsByTagName("h1");
myH1[0].style.color = "red";
// set initial state
let count = 0;
//grab the span tag with the id of "count"
const mySpanTag = document.getElementById("count");
//set the contents of the span tag to equal the count
mySpanTag.innerHTML = count;

function incrementor(){
    mySpanTag.innerHTML = count += 1;

}

function decrementor()
{
    mySpanTag.innerHTML = count -= 1;
}

function setInnerText(){
    //get the input with an Id of user-input
    let userText = document.getElementById("user-input");
    //get the H1 with a classname of my-h1
    let targetH1 = document.getElementsByClassName('my-h1')[0];
    //set the value of the h1 element equal to the value of the input
    targetH1.innerText = userText.value;
}

function toggler(){
    //grab all the p tags on the page
    let allPTags = document.getElementsByTagName("p");
    //loop through all P tags based on the length of the returned P tag array
    for(let i = 0; i <= allPTags.length - 1; i++){
        console.log(allPTags[i]);
        // for each p tag, add a classname of toggled-class
        allPTags[i].className="toggled-class";
    }
}
