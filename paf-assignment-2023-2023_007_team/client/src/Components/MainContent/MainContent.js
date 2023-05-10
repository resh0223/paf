import React, { Component } from 'react';
import "./MainContent.css";
// import Grid  from '@material-ui/core/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';


class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div container>
                    <div item xs={2}></div>
                    <div item xs={6} className="maincontent__container">
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </div>
                    <div item xs={2}>
                        <InfoSection />
                        <Suggestions />
                    </div>
                    <div item xs={2}>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MainContent;