import React from 'react';
import './App.css';
import Header from '../headComp/HeaderJSX';
import Search from '../searchBox/searchbox'
import Names from '../resultComp/resultComp';

const nameSuggestor = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "~ Word Match ~",
            IsExpanded: false,
            showNames: [],
        }
    }

    modifyIsExpanded = (InputInSearchBox) => {
        this.setState({
            IsExpanded: InputInSearchBox.length > 0 ? true : false,
            showNames: InputInSearchBox.length > 0 ? nameSuggestor(InputInSearchBox) : []
        });
    }

    render() {
        console.log(this.state.IsExpanded);
        //console.log(this.state.showNames);
        return (
            <div>
                <Header headTitle={this.state.title} headExpanded={this.state.IsExpanded} />
                <Search OnPassFromParent={this.modifyIsExpanded} />
                <Names suggestions={this.state.showNames} />
            </div>
        )
    }
}
export default App;