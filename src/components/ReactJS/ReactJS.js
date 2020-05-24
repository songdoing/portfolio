import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import styled from 'styled-components';

const ReactContainer = styled.div`
    margin : 0 auto;
    margin-top : 70px;
    width : 920px;
    height : 540px;
    box-shadow : 3px 3px 8px rgba(0,0,0,0.3);
`;

class ReactJS extends Component {
    
    render() {
        return (
            <ReactContainer>
                <Item.Group>
                <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                </Item>

                <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project2'/>
                </Item>

                <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project3'/>
                </Item>
                </Item.Group>
            </ReactContainer>
        )
    }
}
export default ReactJS;