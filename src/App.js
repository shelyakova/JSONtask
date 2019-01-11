import React, { Component } from 'react';
import './App.css';

import users from './users.json';
import User from './User.js';
import { connect } from "react-redux";

class App extends Component {
  state = {
    user: []
  };

  render() {
    const { data,
      handleClick = () => {}
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <label>Users</label>
        </header>
        <main>
          <button
            onClick={() => {
              Object.values(users).map((item, key) => {
                  item.map((user, key) => {
                    handleClick(user.id, user.name, user.surname, user.desc);
                  })
              })
            }}
          >
            Show users
          </button>
          {data.map((i, key) => (
            <div class="user">
              <p key={i.id}>{i.name} {i.surname}</p>
              <p key={key}>{i.desc}</p>
            </div>
          ))}
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    handleClick: (id, name, surname, desc) =>
      dispatch({
        type: "ADD_TRACK",
        payload: {
          id: id,
          name: name,
          surname: surname,
          desc: desc
        }
      })
  })
)(App);
