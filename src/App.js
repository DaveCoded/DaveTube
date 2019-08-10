import React, { Component } from "react";

import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail } from "./components";

import youtube from "./api/youtube";
const apiKey = require("./config/keys").youtubeKey;

class App extends Component {
  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: apiKey,
        q: searchTerm
      }
    });

    console.log(response);
  };

  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
