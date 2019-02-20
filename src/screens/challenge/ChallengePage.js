import React, {Component} from 'react'
import Assignment from "./components/Assignment";
import TabbedTable from "./components/TabbedTable";
import SqlEditor from "./components/SqlEditor";
import ChallengerProgress from "./components/ChallengerProgress";
import RequestHelper from '../../helpers/RequestHelper'

class ChallengePage extends Component {
    state = {
        challenge: {
            description: '',
            tables: []
        }
    };

    componentDidMount () {
        RequestHelper.get('/challenges/next').then(challenge => {
            this.setState({challenge})
        })
    }

    render() {
        const {challenge} = this.state
        console.log(challenge)

        return (<div>
            <div className="flex justify-end">
                <ChallengerProgress/>
            </div>

            <div className="flex mt-12 items-stretch">
                <SqlEditor className="flex-1 h-64"/>
                <div className="flex-1 ml-16">
                    <Assignment description={challenge.description}/>
                    <TabbedTable tables={challenge.tables}/>
                </div>
            </div>
        </div>)
    }
}

export default ChallengePage
