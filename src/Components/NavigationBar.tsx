import React from "react";

export default function NavigationBar() {
    return <div className="nav">
        <div>
            <img className="logo" src="https://avatars.githubusercontent.com/u/56773306?v=4" alt="Avatar"/>
        </div>
        <div className="up">
            <ul className="up_ul">
                <li><a href="#">Courses<br/>
                    <div className="bar"/>
                </a></li>
                <li><a href="#">Tutorial<br/>
                    <div className="bar"/>
                </a></li>
                <li><a href="#">News<br/>
                    <div className="bar"/>
                </a></li>
                <li><a href="#">App Hosting<br/>
                    <div className="bar"/>
                </a></li>
            </ul>
        </div>
        <div className="down">
            <ul className="down_ul">
                <li id="react">#react</li>
                <li id="vue">#vue</li>
                <li id="angular">#angular</li>
                <li id="javascript">#javascript</li>
                <li id="node">#node</li>
                <li id="laravel">#laravel</li>
                <li id="css">#css</li>
                <li id="vs-code">#vs-code</li>
                <li id="python">#python</li>
            </ul>
        </div>
    </div>;
}
