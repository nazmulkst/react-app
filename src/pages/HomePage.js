import React, {Component} from "react";
import HomeBanner from "../components/home/HomeBanner";
import HomeMenu from "../components/home/HomeMenu";
import HomeList from "../components/home/HomeList";
import Library from "../components/home/Library";

class HomePage extends Component {
    constructor(){
        super();
    };
    render(){
        return (
            <div>
                <Library />
                <HomeMenu title="Welcome" menu={{about: "About Us", home: "Home", profile: "Profile"}} />
                <HomeBanner test={{name:"Test Test2"}} title="Test Param" subTitle="welcome"/>
                <HomeList title="this is home list" />
            </div>
        );
    };
};
export default HomePage;