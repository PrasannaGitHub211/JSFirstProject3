const courses = [
    {
        name:"Complete Ract JS Course",
        price:"2.3",
    },
    {
        name:"Complete Angular JS Course",
        price:"3.3",
    },
    {
        name:"Complete Vue JS Course",
        price:"1.3",
    },
    {
        name:"Complete Node JS Course",
        price:"4.3",
    },
    {
        name: "Complete React JS Course",
        price: "2.3",
    },
    {
        name: "Complete Angular JS Course",
        price: "3.3",
    },
    {
        name: "Complete Vue JS Course",
        price: "1.3",
    },
    {
        name: "Complete Node JS Course",
        price: "4.3",
    },
    {
        name: "Advanced JavaScript Concepts",
        price: "1.9",
    },
    {
        name: "Responsive Web Design",
        price: "2.5",
    },
    {
        name: "Machine Learning Basics",
        price: "3.8",
    },
    // Add 3 more courses here
    {
        name: "Data Structures and Algorithms",
        price: "2.7",
    },
    {
        name: "Python for Beginners",
        price: "1.5",
    },
    {
        name: "Web Development with Django",
        price: "4.1",
    }


];


function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) =>{
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name)
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$"+course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

    });
}
// generateList();
//or below this all are same
window.addEventListener("load",generateList);


const sortAscendBtn = document.querySelector(".sort-btn");

sortAscendBtn.addEventListener("click", () =>{
    courses.sort((a,b) => a.price-b.price);
    generateList();
});


const sortDecendBtn = document.querySelector(".descend-btn");

sortDecendBtn.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price-a.price);
    generateList();
})