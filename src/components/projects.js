import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <h1>Employee-Directory</h1>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '50px'}} >React Project </CardTitle>
            <img src = "/images/user directory.PNG"
 alt=""/>            <CardText>
            An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/hema0618/Employee-directory" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a></Button>
              </CardActions>
            </Card>
         </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
            <h1>Books-by-You</h1>
        <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '50px'}} >Node Project </CardTitle>
            <img src = "/images/books.PNG"
 alt=""/>            <CardText>
          A simple online book store management system. register/search books/ Buy books

            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/hema0618/Books-by-You" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a></Button>
              </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
        <h1>Weather-Dashboard</h1>
        <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '50px'}} >JavaScript Project</CardTitle>
            <img src = "/images/weather.PNG"
 alt=""/>            <CardText>
          A simple weather dashboard application, that shows you the current weather and 5 day forecast of whatever city the user inputs.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/hema0618/weather-Dashboard" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a></Button>
              </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Save-a-Toonie</h1>
         <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '50px'}} >MongoDB Project</CardTitle>
            <img src = "/images/Capture.PNG"
 alt=""/>            <CardText>
         Budget Tracker is an open-source progressive web app that allows you to track your income and expenses.

This app can work offline on desktop, tablet and mobile.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/hema0618/Save-a-Toonie" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a></Button>
              </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Node</Tab>
          <Tab>JavaScript</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;