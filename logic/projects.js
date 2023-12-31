const project =[
    {
        img:"./public/project/project5.png",
        path:"https://tradition-nice-one-client.vercel.app/"
    },
    {
        img:"./public/project/project2.png",
        path:"https://plants-react-app.netlify.app/"
    },
    {
        img:"./public/project/project1.png",
        path:"https://sneaker-react-app.netlify.app/"
    },
    {
        img:"./public/project/project3.png",
        path:"https://riva-react-app.netlify.app/"
    },
    {
        img:"./public/project/project4.png",
        path:"https://plants-react-app.netlify.app/"
    },
]
//start portfolo
let container_portfolo = document.querySelector("#container-portfolo")
project.map((item,index)=>{
    //start container
    let projects_card = document.createElement("div")
    projects_card.className = "projects-card"
    projects_card.id = index
    //start container img
    let projects_img = document.createElement("div")
    projects_img.className = "projects-img"
    let img = document.createElement("img")
    img.src = item.img
    projects_img.appendChild(img)
    projects_card.appendChild(projects_img)
    //start linke
    let rout_project = document.createElement("a")
    rout_project.className = "rout-project"
    rout_project.innerHTML= "Visit"
    rout_project.href = item.path
    rout_project.setAttribute("target", "_blank");
    projects_card.appendChild(rout_project)
    //start appund
    container_portfolo.appendChild(projects_card)
})
//end portfolo
