import React, { Component } from 'react'
import Intro from '../../components/Intro/Intro'
import Resume from '../../components/Resume/Resume'
import Projects from '../../components/Projects/Projects'
import styled from 'styled-components';

const wall = require('../../img/wall3.jpg');
const BackgroundContainer = styled.div`
    .wallpaper {
        background :url(${wall});
    }
`;

class Page extends Component {
    displayPage = (no) => {
        switch(no){
            case 0:
                return <Intro />;
            case 1:
                return <Resume />;
            case 2:
                return <Projects />;
            default :
                return <Intro />;
        }
    };
    render() {
        return (
            <BackgroundContainer>
                <div className = "wallpaper">
                {this.displayPage(this.props.page)}
                </div>
            </BackgroundContainer>            
        )
    }
}
export default Page;