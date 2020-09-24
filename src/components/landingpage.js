import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <hr  />
                        <img
                           src="/images/profile.jpg" alt=""
                        />
                        <hr />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>

                            <div className="social-links">
                                {/* linkedin */}

                                <a href="https://www.linkedin.com/in/komatineni-hemalatha-628b2995/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/hema0618" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>



                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}
export default Landing;