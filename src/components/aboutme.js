import React, { Component } from "react";
import { Grid, Cell, Button } from 'react-mdl';


class About extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Hema</h2>
                        <img
                            src="/images/profile.jpg" alt=""
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}></p>

                    </Cell>
                    <Button colored>
                    </Button>
                    <Button colored></Button>
                    <Cell col={6}>
            <p>Learning to be full stack developer through Rutgers bootcamp. I have
          bachelors degree in computer science and still working my way up in coding. I am still young and
          learning the industry. Always on a lookout for new and exciting design challenges.You can checkout my work</p>
            

          <Button colored><a href="https://github.com/hema0618" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a></Button>
                    <Button colored><a href="https://www.linkedin.com/in/komatineni-hemalatha-628b2995/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />

                    </a></Button>
</Cell>
            </Grid>
         </div>

    )

    }
}
export default About;






