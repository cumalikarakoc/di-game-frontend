import React, {Component} from 'react'
import websocket from 'socket.io-client'
import AceEditor from 'react-ace'

class QueryCardsPage extends Component {
    state = {
        players: [
            {playerId: 1, query: "SELECT 1 FROM Cars"},
            {playerId: 2, query: "SELECT Cars.id FROM Cars"},
            {playerId: 3, query: "SELECT 1 FROM Cars"},
            {playerId: 4, query: "SELECT 1 FROM Cars"},
            {playerId: 5, query: "SELECT 1 FROM Cars"},
        ]
    }

    componentDidMount() {
//     const socket = websocket('http://127.0.0.1:3001')
//     socket.on('progress update', players => {
// console.log(players)
//       this.setState({
//         players: players
//       })
//     })
    }

    render() {
        const {players} = this.state

        return <div>
            <h1>Players</h1>

            <div className="whitespace-no-wrap mt-10">
                {players.map(player => {
                    return <div key={player.playerId} className=" w-1/3 bg-grey-dark inline-block mr-2">
                        <div className="">
                            <div className="w-full bg-grey-dark h-16 relative">
                                <div className="absolute" style=
                                    {{backgroundImage: `url(https://via.placeholder.com/150)`,
                                        top: "-77%", left:"40%", width:"100px", height: "100px", borderRadius: "50px"}}
                                ></div>
                            </div>
                            <AceEditor
                                width="100%"
                                mode="sqlserver"
                                theme="textmate"
                                name={"ace" + player.playerId}
                                value={player.query}
                                editorProps={{$blockScrolling: true}}
                            />
                        </div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default QueryCardsPage
