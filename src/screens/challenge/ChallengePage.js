import React, {Component} from 'react'
import Assignment from "./components/Assignment";
import TabbedTable from "./components/TabbedTable";

class ChallengePage extends Component {
    state = {
        players: []
    };

    render() {
        return <div>
            <h1>Challenge Page</h1>
            <Assignment assignment={"Get all students following DMDD course."}/>
            <TabbedTable/>
        </div>
    }
}

export default ChallengePage
