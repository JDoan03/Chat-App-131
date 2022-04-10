const routes = (app) => {
    //create route for donations
    app.route('/donations')
      //create get request
      .get((req, res) =>
      res.send('GET request successful!'))
      //create post request
      .post((req, res) =>
      res.set('POST request successful!'));
    // create a new route so you can get these donation entries by their ID's
    app.route('/donations/:donationID')
      //create put request
      .put((req, res) =>
      res.send('PUT request successful!'))
      //create delete request
      .delete((req, res) =>
      res.send('DELETE request successful'))
  }
  // export it!
  export default routes;