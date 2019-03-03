import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardMenu, CardText, CardTitle, CardActions, Button, IconButton} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">>
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{
                        color: 'black',
                        height: '176px',
                        background: 'url(https://goo.gl/L7o29g)center / cover'  }}>
                   .NET MVC PROJECT #1
                    </CardTitle>
                        <CardText>
                            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
                        </CardText>
                        <CardActions border>
                            <Button>Github</Button>
                            <Button>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>

                </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            background: 'url(https://goo.gl/L7o29g)center / cover'  }}>
                            .NET MVC PROJECT #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
                        </CardText>
                        <CardActions border>
                            <Button>Github</Button>
                            <Button>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>

                    </Card>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: 'black',
                            height: '176px',
                            background: 'url(https://goo.gl/L7o29g)center / cover'  }}>
                            .NET MVC PROJECT #1
                        </CardTitle>
                        <CardText>
                            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
                        </CardText>
                        <CardActions border>
                            <Button>Github</Button>
                            <Button>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>

                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h2>This is React</h2></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h2>This is JavaScript</h2></div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>ASP.NET MVC</Tab>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>

                    <Grid >
                        <Cell col={12}>
                            <div className="contennt">   {this.toggleCategories()} </div>
                        </Cell>
                    </Grid>



            </div>
        );
    }
}

export default Projects;