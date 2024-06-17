const newsRouter = require("./new");
const siteRouter = require("./site");


function route(app) {
    
  app.use("/news", newsRouter);
  
  app.use("/", siteRouter);
  
}

module.exports = route;
