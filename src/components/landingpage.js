import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://cnet2.cbsistatic.com/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">


                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}
export default Landing;