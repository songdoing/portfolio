import React, { Component } from 'react'
import styled from 'styled-components';
import { FlexBox } from '../reusable/styles';
import {Icon} from 'semantic-ui-react';

const IntroContainer = styled.div`
    position: relative;
    background : #fff;
    margin : 0 auto;
    margin-top : 70px;
    width : 920px;
    height : 540px;
    box-shadow : 3px 3px 8px rgba(0,0,0,0.3);
    .label { 
        font-weight : bold;
        text-align : right;
    }
    .me{
        width :80%;
    }
    .job{
        color : #aaa;
        font-size : 20px;
        letter-spacing : 1.5px;
    }
    .name {
        font-size : 30px;
        font-weight : bold;
        margin-top : 10px;
        border-bottom : 0.5px solid black;
        padding-bottom : 10px;
        width : 94%;
    }
    .skills {
        font-size : 15px;
    }
`;

const IconBox = styled.div`
    position :absolute;
    bottom : 0;
    height : 80px;
    background: #B993D6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8CA6DB, #B993D6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8CA6DB, #B993D6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    width : 100%;
    padding : 13px 0 ;
    .myicon {
        cursor : pointer;
        transition : 0.5s;
    }
    .github:hover{
        color : #302F2f !important;
    }
    .linkedin:hover{
        color : #2464ad !important;
    }
    .google:hover{
        color : #ad2f20 !important;
    }
`;

class Intro extends Component {
    render() {
        return (
            <div>
                <IntroContainer>
                    <FlexBox>
                        <div className = "flex-4" style={{padding : "25px"}}>
                            <img className = "me" alt = "me" src = {require('../../img/jenny.jpg')} />
                        </div>
                        <div className = "flex-6" style={{paddingTop : "30px"}}>
                            <div className = "job">FullStack Developer</div>
                            <div className = "name">Jenny Song</div>
                            <div className = "skills">HTML/CSS | JavaScript | ReactJS | Redux | NodeJS | Express | MySQL | PHP</div>
                            <br/>
                            <FlexBox>
                                <div className="flex-2 label">Whose mom</div>
                                <div className = "flex-1">&nbsp;</div>
                                <div className="flex-6">Mason</div>
                            </FlexBox>
                            <FlexBox style={{marginTop: "7px"}}>
                                <div className="flex-2 label">School</div>
                                <div className = "flex-1">&nbsp;</div>
                                <div className="flex-6">good School</div>
                            </FlexBox>
                        </div>
                    </FlexBox>
                    <IconBox>
                        <FlexBox>
                        <div className="flex-2"/>
                        <div className = "flex-1">
                            <a href="https://github.com/songdoing">
                            <Icon className="myicon github" name="github" size='huge' style={{color:'white'}}/>
                            </a>                            
                        </div>
                        <div className = "flex-1">
                            <a href="https://www.linkedin.com/in/jenny-wonjin-song-082226186/">
                            <Icon className="myicon linkedin" name="linkedin" size='huge' style={{color:'white'}}/>
                            </a>
                        </div>
                        <div className = "flex-1">
                            <a href="mailto:wonjinsongdoing@gmail.com">
                            <Icon className="myicon google" name="google plus" size='huge' style={{color:'white'}}/>
                            </a>
                        </div>
                        
                        <div className="flex-2"/>
                        </FlexBox>
                    </IconBox>
                </IntroContainer>
            </div>
        )
    }
}
export default Intro;