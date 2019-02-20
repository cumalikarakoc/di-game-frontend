import React, {Component} from 'react'
import Assignment from "./components/Assignment";
import TabbedTable from "./components/TabbedTable";
import SqlEditor from "./components/SqlEditor";
import ChallengerProgress from "./components/ChallengerProgress";

class ChallengePage extends Component {
    state = {
        players: []
    };

    render() {
        return (<div>
            <div className="flex justify-end">
                <ChallengerProgress/>
            </div>
            <div className="flex mt-12 items-stretch">
                <SqlEditor className="flex-1"/>
                <div className="flex-1 ml-16">
                    <Assignment assignment="Assignment"/>
                    <TabbedTable/>
                </div>
            </div>
        </div>)
    }
}

export default ChallengePage
