import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl";


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar-image"
                             src="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png"/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>ASP.NET MVC | Microsoft SQL Server | C# | JavaScript | React | HTML/CSS | Bootstrap</p>
                            <div className="social-links">
                                {/*Linkedin*/}
                                <a href="https://www.google.com" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                {/* */}
                                <a href="https://www.google.com">
                                    <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                </a>
                                {/* */}
                                <a href="https://www.google.com">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        );
    }
}

export default Landing;