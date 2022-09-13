import React from "react";
import '../src/Projects.css'
function Projects() {
   let  data1 = [
         {
            title: "Summer House",
            src: "https://www.w3schools.com/w3images/house5.jpg",
        },
      {
            title: "Brick House",
            src: "https://www.w3schools.com/w3images/house2.jpg",
        },
       {
            title: "Renovated",
            src: "https://www.w3schools.com/w3images/house3.jpg",
        },
     {
            title: "Barn House",
            src: "https://www.w3schools.com/w3images/house4.jpg",
        },
   
    ]
    let data2=[
        {
            title: "Summer House",
            src: "https://www.w3schools.com/w3images/house2.jpg",
        },
      {
            title: "Brick House",
            src: "https://www.w3schools.com/w3images/house5.jpg",
        },
   {
            title: "Renovated",
            src: "https://www.w3schools.com/w3images/house4.jpg",
        },
      {
            title: "Barn House",
            src: "https://www.w3schools.com/w3images/house3.jpg",
        }

    ]



    return (
        <div>
            <h1>Projects</h1>
            <div className="container">
           { data.map(element => {
         return   <div>
                <img src={element.src}/>
                <h2>{element.title}</h2>
                </div>
            })
        }
                    </div>

        </div>
    )
}

export default Projects