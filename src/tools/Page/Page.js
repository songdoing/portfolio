import React, { Component } from 'react'
import Intro from '../../components/Intro/Intro'
import ReactJS from '../../components/ReactJS/ReactJS'

class Page extends Component {
    displayPage = (no) => {
        switch(no){
            case 0:
                return <Intro />;
            case 1:
                return <ReactJS />;
            default :
                return <Intro />;
        }
    };
    render() {
        return (
            <div>
                {this.displayPage(this.props.page)}
            </div>
        )
    }
}
export default Page;