import React, { Component } from 'react';
import './App.css';

import users from './users.json';
import User from './User.js';
import { connect } from "react-redux";

class App extends Component {
  state = {
    user: []
  };

  getData() {
    var box = users;
    var array = [];
    var values = Object.values(users);
    console.log(values);
    values.map((item, key) => {
      item.map((user, key) => {
        array[key] = user
      });
    });
    //this.setState({user: array});
    console.log(this.state);
  }



  render() {
    const { data,
      handleClick = () => {},
      onDelete = () => {}
    } = this.props;
    return (
      <div className="App">
      {Object.values(users).map((item, key) => (
          item.map((user, key) => (
            console.log(user.id, user.name, user.surname, user.desc)
          ))
      ))}
        <header className="App-header">
          <label>Users</label>
        </header>
        <main>
          <User/>
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
      }),
    onDelete: idx =>
      dispatch({
        type: "DELETE_TRACK",
        payload: idx
      })
  })
)(App);
