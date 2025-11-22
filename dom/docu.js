//the dom document object model practice
//understanding the document tree
//accessing the data
// const Id = document.getElementById("title");
// console.log(Id);
/*3 ways to accessing data 
1.textContent
2.innerTxt
3.innerHTML*/
// console.log(Id.textContent); //the textcontent can to get the html page
// console.log(Id.innerText); //the inner text can get the data from web page after running the html page
// console.log(Id.innerHTML);

//by id
const id = document.getElementById("title");
console.log(id.innerHTML);

//by class access data
const clss = document.getElementsByClassName("cl");
console.log(clss);
const ar = Array.from(clss);
ar.map((ite) => {
  console.log(ite.textContent);
});

//by tag access
const p = document.getElementsByTagName("li");
console.log(p);
const arr = Array.from(p);
arr.map((itew) => {
  console.log(itew.textContent);
});
