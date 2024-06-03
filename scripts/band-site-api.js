class BandSiteApi {
  constructor() {
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    this.apiKey = "";
  }

  async initializeApiKey() {
    this.apiKey = await this.getNewApi();
  }
  async getNewApi() {
    const response = await axios.get(this.baseUrl + "register");
    return response.data.api_key;
  }

  async getComments() {
    try {
      const response = await axios.get(
        this.baseUrl + "comments?api_key=" + this.apiKey
      );
      const comments = response.data;
      console.log(comments);
      return comments.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
    } catch (error) {
      console.log(error);
    }
  }

  async postComment(comment) {
    try {
      await axios.post(
        this.baseUrl + "comments?api_key=" + this.apiKey,
        comment
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getShowDates() {
    try {
      const response = await axios.get(
        this.baseUrl + "showdates?api_key=" + this.apiKey
      );
      const shows = response.data;
      console.log(shows);
      return shows.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
    } catch (error) {
      console.log(error);
    }
  }
}
export default BandSiteApi;
