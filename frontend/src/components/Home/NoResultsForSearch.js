import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./NoResultsForSearch.module.scss";

const mapStateToProps = (state) => ({
  ...state.itemList,
});

const mapDispatchToProps = () => ({});

class NoResultsForSearch extends Component {
  render() {
    if (this.props.title) {
      return (
        <div id="empty" className={classes.wrapper}>
          <div className={classes.box}>
            <img
              className={classes.img}
              alt="crying emoticon"
              src="/crying.png"
            />
            <p className={classes.text}>
              No items found for "<strong>{this.props.title}</strong>".
            </p>
          </div>
        </div>
      );
    }
    return <div className="py-4 no-items">No items are here... yet.</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoResultsForSearch);
