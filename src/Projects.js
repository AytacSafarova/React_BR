import React from "react";
function Projects() {
    let data1 = [
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
    let data2 = [
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
            <div className="w3-container w3-padding-32" id="projects">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
            </div>
            <div className="w3-row-padding">
                {
                    data1.map(element => {
                        return <div className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">{element.title}</div>
                                <img src={element.src} alt="House" style={{ width: '100%' }} />
                            </div>
                        </div>
                    })
                }
            </div>
            <div className="w3-row-padding">
                {
                    data2.map(element => {
                        return <div className="w3-col l3 m6 w3-margin-bottom">
                            <div className="w3-display-container">
                                <div className="w3-display-topleft w3-black w3-padding">{element.title}</div>
                                <img src={element.src} alt="House" style={{ width: '100%' }} />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default Projects