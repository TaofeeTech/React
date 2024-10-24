import React from "react";
import ReactDom from "react-dom";
import img1 from "./images/member-1.jpg";
import img2 from "./images/member-2.jpg";
import img3 from "./images/member-3.jpg";

const App = () => {

    return (
        <div className="ui comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={img1} alt="profile"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        sarah 
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className="text">
                        it's amazing
                    </div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={img2} alt="profile"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        sarah 
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className="text">
                        it's amazing
                    </div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={img3} alt="profile"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        sarah 
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className="text">
                        it's amazing
                    </div>
                </div>
            </div>
        </div>
    );

}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
)