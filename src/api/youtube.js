import axios from "axios";

export default axios.create({
  // axios.create() is a helper function that makes our axios.get() calls easier elsewhere
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "[API KEY]"
  }
});
