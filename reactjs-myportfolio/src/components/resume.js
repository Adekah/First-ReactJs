import React, {Component} from 'react';
import {Grid, Cell} from "react-mdl";
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Hüseyin Adeka</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500 </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Lorem Ipsum, dizgi ve baskı endüstrisinde </p>
                        <h5>Phone</h5>
                        <p>(123)586 89 56</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>


                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h3>Education</h3>
                        <Education startYear={2002}
                                   endYear={2006}
                                   SchoolName={"Mehmet Şam Aöl"}
                                   SchoolDescription={"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500"}/>
                        <Education startYear={2002}
                                   endYear={2006}
                                   SchoolName={"Mehmet Şam Aöl"}
                                   SchoolDescription={"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500"}/>
                        <Education startYear={2002}
                                   endYear={2006}
                                   SchoolName={"Mehmet Şam Aöl"}
                                   SchoolDescription={"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500"}/>

                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h3>Experience</h3>
                        <Experience
                            startYear={2009}
                            endYear={2015}
                            jobName={"First Job"}
                            jobDescription={"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500"}/>
                        <Experience
                            startYear={2009}
                            endYear={2015}
                            jobName={"Second Job"}
                            jobDescription={"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500"}/>
                        <Experience
                            startYear={2009}
                            endYear={2015}
                            jobName={"Third Job"}
                            jobDescription={"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500"}/>
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h3>Skills</h3>
                        <Skills
                            skill={"JavaScript"}
                            progress={60}/>
                        <Skills
                            skill={".Net MVC"}
                            progress={70}/>
                        <Skills
                            skill={"React"}
                            progress={60}/>
                        <Skills
                            skill={"HTML/CSS"}
                            progress={75}/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;