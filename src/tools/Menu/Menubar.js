import React, { Component } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';

const Menu = styled.div`
    position : fixed;
    display : flex;
    justify-content : space-between;
    bottom : 0;
    width :560px;
    background-color : #efefef;
    height : 120px;
    left : 50%;
    padding :15px 30px;
    padding-bottom : 10px;
    transform : translateX(-50%);
    border-top-left-radius : 25px;
    border-top-right-radius : 25px;
`;

class Menubar extends Component {
    menus = [
        {
            icon : 'info',
            color : '#4CAF50',
            text : 'Intro'
        },
        {
            icon : 'newspaper outline',
            color : '#5CD3F3',
            text : 'Resume'
        },
        
        {
            icon : 'computer',
            color : '#F8C52B',
            text : 'Projects'
        }
    ];

    renderMenus = (arr) => {
        return arr.map((a, index)=>{
            return <MenuButton 
                showPage = {this.props.showPage} 
                index = {index}
                key={index} 
                icon={a.icon} 
                color={a.color} 
                text={a.text} />
        });
    };
    
    render() {
        return (
            <Menu>
                {this.renderMenus(this.menus)}                
            </Menu>
            
        )
    }
}

export default Menubar;
