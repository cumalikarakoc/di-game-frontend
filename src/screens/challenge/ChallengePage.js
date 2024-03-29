import React, { Component } from "react";
import TabbedTable from "./components/TabbedTable";
import SqlEditor from "./components/SqlEditor";
import websocket from "socket.io-client";
import { SOCKET_URL } from "./../../config";

class ChallengePage extends Component {
  socket = null;
  state = {
    challenge: {
      description: "",
      tables: []
    }
  };

  componentDidMount() {
    this.socket = websocket(SOCKET_URL);

    this.socket.on("next challenge", challenge => {
      this.setState({
        challenge: {
          description: challenge.description,
          tables: challenge.schema.tables
        }
      });
    });
  }

  handleChange = nextValue => {
    this.socket.emit("query update", {
      playerId: localStorage.getItem("playerId"),
      query: nextValue
    });
  };

  render() {
    const { challenge } = this.state;

    return (
      <div className="flex-grow">
        <div className="flex items-stretch">
          <div className="flex-1 bg-white shadow">
            <div className="p-4 border-b border-grey-lighter font-bold text-grey-darker">
              <span>Query Editor</span>
            </div>
            <div className="p-4">
              <SqlEditor
                className="min-h-64"
                id="EDITOR_1"
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex-1 bg-white ml-16 shadow">
              <div className="p-4 border-b border-grey-lighter font-bold text-grey-darker">
                <span>Challenge</span>
              </div>
              <div className="p-4">
                <p>{challenge.description}</p>
              </div>
            </div>

            <div className="flex-1 bg-white ml-16 mt-6 shadow">
              <div className="p-4 border-b border-grey-lighter font-bold text-grey-darker">
                <span>Example Population</span>
              </div>
              <div className="p-4">
                <TabbedTable tables={challenge.tables} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengePage;
