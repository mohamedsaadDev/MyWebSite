const project =[
    {
        img:"./public/project/project7.png",
        path:"https://styling-resume-git-master-mohamed-saads-projects.vercel.app/",
        alternate:"Styling Resume"
    },
    {
        img:"./public/project/project5.png",
        path:"https://imitation-nice-one-client.vercel.app",
        alternate:"Nice One "
    },
    {
        img:"./public/project/project6.png",
        path:"https://dashbord-wine.vercel.app/",
        alternate:"Imitation Nice One "
    },
    {
        img:"./public/project/project2.png",
        path:"https://plants-react-app.netlify.app/",
        alternate:"decoration plants"
    },
    {
        img:"./public/project/project3.png",
        path:"https://riva-react-app.netlify.app/",
        alternate:"Imitation Nice One "
    },
    {
        img:"./public/project/project1.png",
        path:"https://sneaker-react-app.netlify.app/",
        alternate:"Snicker"
    },
    {
        img:"./public/project/project4.png",
        path:"https://coffeeking-app.netlify.app/",
        alternate:"Coffeeking"
    },
]
//start portfolo
let container_portfolo = document.querySelector("#container-portfolo")
function displayProjects (projects) {
    projects.forEach((item,index)=>{
        let container =`
        <div id=${index} class="projects-card" >
            <div class ="projects-img">
                <img src=${item.img} alt=${item.alternate}>
            </div>
            <a class="rout-project" href=${item.path} target="_blank">Visit</a>
        </div>
        `
        container_portfolo.insertAdjacentHTML('beforeend', container);
    })
}
displayProjects (project.slice(0,4))
let btnredmor = document.querySelector(".btn-redmor")
let statebtn = true
btnredmor.addEventListener("click",()=>{
    if(statebtn){
        container_portfolo.innerHTML = "";
        displayProjects (project)
        btnredmor.innerHTML = "Show Less"
        statebtn = false
    }else{
        container_portfolo.innerHTML = "";
        displayProjects (project.slice(0,4))
        btnredmor.innerHTML = "Show more"
        statebtn = true
    }
})
//end portfolo
