/* eslint-disable eqeqeq */
import React from 'react';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: null,
      minute: null,
      second: null,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      hour: String(new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()),
      minute: String(new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()),
      second: String(new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds()),
    }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  getActives(t) {
    const r = {};
    t.forEach((e, k) => {
      r[k] = {};
      if (e == 1 || e == 3 || e == 5 || e == 7 || e == 9) {
        r[k][1] = 'active';
      } else {
        r[k][1] = '';
      }

      if (e == 2 || e == 3 || e == 6 || e == 7) {
        r[k][2] = 'active';
      } else {
        r[k][2] = '';
      }
      if (e == 4 || e == 5 || e == 6 || e == 7) {
        r[k][4] = 'active';
      } else {
        r[k][4] = '';
      }
      if (e == 8 || e == 9) {
        r[k][8] = 'active';
      } else {
        r[k][8] = '';
      }
    });
    return r;
  }
  render() {
    const h = this.getActives((`${this.state.hour}`).split(''));
    const m = this.getActives((`${this.state.minute}`).split(''));
    const s = this.getActives((`${this.state.second}`).split(''));
    if (h[1] === undefined || m[1] === undefined || s[1] === undefined) {
            // not ready yet
      return (<div className="loading">loading...
      </div>
      );
    }
    return (<div className="clock-container">
      <div className={`cell hour-1-1 ${h[0][1]}`} />
      <div className={`cell hour-1-2 ${h[0][2]}`} />
      <div className={`cell hour-2-1 ${h[1][1]}`} />
      <div className={`cell hour-2-2 ${h[1][2]}`} />
      <div className={`cell hour-2-4 ${h[1][4]}`} />
      <div className={`cell hour-2-8 ${h[1][8]}`} />
      <div className={`cell minute-1-1 ${m[0][1]}`} />
      <div className={`cell minute-1-2 ${m[0][2]}`} />
      <div className={`cell minute-1-4 ${m[0][4]}`} />
      <div className={`cell minute-2-1 ${m[1][1]}`} />
      <div className={`cell minute-2-2 ${m[1][2]}`} />
      <div className={`cell minute-2-4 ${m[1][4]}`} />
      <div className={`cell minute-2-8 ${m[1][8]}`} />
      <div className={`cell second-1-1 ${s[0][1]}`} />
      <div className={`cell second-1-2 ${s[0][2]}`} />
      <div className={`cell second-1-4 ${s[0][4]}`} />
      <div className={`cell second-2-1 ${s[1][1]}`} />
      <div className={`cell second-2-2 ${s[1][2]}`} />
      <div className={`cell second-2-4 ${s[1][4]}`} />
      <div className={`cell second-2-8 ${s[1][8]}`} />
    </div>
    );
  }
}
