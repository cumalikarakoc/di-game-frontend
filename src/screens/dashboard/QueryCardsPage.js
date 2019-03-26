import React, { Component } from "react";
import websocket from "socket.io-client";
import AceEditor from "react-ace";

class QueryCardsPage extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    const socket = websocket("https://di-game-api.maartendev.me");

    socket.on("progress update", players => {
      this.setState({
        players: players
      });
    });
  }

  render() {
    const { players } = this.state;

    return (
      <div>
        <h1>Players</h1>

        <div className="whitespace-no-wrap mt-10 overflow-x-scroll">
          {players.map(player => {
            return (
              <div key={player.playerId} className="w-1/3 inline-block mr-4">
                <div style={{ marginTop: "80px" }} className="shadow-lg">
                  <div className="w-full bg-white rounded h-16 relative">
                    <div
                      className="absolute"
                      style={{
                        backgroundImage: `url(${player.avatarUrl})`,
                        top: "-77%",
                        left: "40%",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50px"
                      }}
                    />
                  </div>
                  <AceEditor
                    width="100%"
                    mode="sqlserver"
                    theme="textmate"
                    name={"ace" + player.playerId}
                    value={player.query}
                    fontSize="18px"
                    editorProps={{ $blockScrolling: true }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default QueryCardsPage;
