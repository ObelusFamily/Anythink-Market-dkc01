import React from "react";
import { connect } from "react-redux";
import { APPLY_ITEM_TITLE_FILTER } from "../../constants/actionTypes";
import agent from "../../agent";

const mapStateToProps = (state) => ({
  ...state.home,
});

const mapDispatchToProps = (dispatch) => ({
  onTitleSearch: (title, pager, payload) =>
    dispatch({ type: APPLY_ITEM_TITLE_FILTER, title, pager, payload }),
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleSearch = (e) => {
    const newSearch = e.target.value;
    this.setState({ search: newSearch });
    if (newSearch.length > 2) {
      this.props.onTitleSearch(
        newSearch,
        (page) => agent.Items.byTitle(newSearch, page),
        agent.Items.byTitle(newSearch)
      );
    }
  };

  render() {
    return (
      <div className="d-inline-flex position-relative mx-2 form-group">
        <input
          className="form-control"
          style={{ minWidth: "300px" }}
          id="search-box"
          placeholder="What is it you truly desire?"
          value={this.state.search}
          onChange={this.handleSearch}
        />
        <i
          style={{
            color: "rgb(79,36,189)",
            top: "7px",
            right: "5px",
            userSelect: "none",
            pointerEvents: "none",
          }}
          className="ion-search position-absolute top-1 left-full mx-2"
        ></i>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
