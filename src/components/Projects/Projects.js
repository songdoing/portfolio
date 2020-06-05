import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import styled from 'styled-components';
import { FlexBox } from '../reusable/styles';

const ProjectContainer = styled.div`
    margin : 0 auto;
    margin-top : 70px;
    padding : 20px;
    width : 100%;
    height : 540px;
    background : #fff;
    box-shadow : 3px 3px 8px rgba(0,0,0,0.3);
    overflow : auto;
`;

class Projects extends Component {
    render() {
        return (
            <ProjectContainer>
                <Item.Group>

                   <FlexBox>
                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>
                    </FlexBox> 

                    <FlexBox>
                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>
                    </FlexBox> 

                    <FlexBox>
                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>
                    </FlexBox> 

                    <FlexBox>
                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>
                    </FlexBox> 

                    <FlexBox>
                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>

                       <div className = "flex-3">
                       <Item>
                    <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' Description='project1'/>
                    </Item>
                       </div>
                    </FlexBox> 

                
                </Item.Group>
            </ProjectContainer>
        )
    }
}
export default Projects;
