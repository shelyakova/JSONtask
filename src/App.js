import React, { Component } from 'react';
import './App.scss';

import users from './users.json';
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';
import axios from "axios";

class App extends Component {
  state = {
    user: [],
    userInfo: 1,
    usersOnPage: 5
  };

  render() {
    const { data,
      handleClick = () => {}
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <label><h2>Users</h2></label>
        </header>
        <main>
          <Button
          className={this.state.userInfo === 0 ? "hidden" : "button"}
            onClick={() => {
              Object.values(users).map((item, key) => {
                  item.map((user, key) => {
                    this.state.userInfo === 1 &&
                    handleClick(user.id, user.name, user.surname, user.desc);
                  })
              })
              this.setState({userInfo: 0})
            }}
          >
            Show users
          </Button>
          {data.map((i, key) => (
              <div className={key < this.state.usersOnPage ? "user": null}>
                <p key={i.id}>
                  {key < this.state.usersOnPage ? i.name : null}
                  {key < this.state.usersOnPage ? " " : null}
                  {key < this.state.usersOnPage ? i.surname : null}
                </p>
                  {key < this.state.usersOnPage ? <hr/> : null}
                <p key={key}>
                <h5>
                  {key < this.state.usersOnPage ? i.desc : null}
                </h5>
                </p>
              </div>
          ))}
          {console.log(this.state.userInfo)}
          <Button
            className={this.state.usersOnPage >= 20
              || this.state.userInfo === 1
              ? "hidden" : "none"}
            onClick={() => {
              var newUsers = this.state.usersOnPage + 5;
              this.setState({usersOnPage: newUsers})
            }}
          >
            More users
          </Button>
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
