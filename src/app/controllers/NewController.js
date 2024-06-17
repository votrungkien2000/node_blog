
class NewsController {
    //GET /new
    index(req, res) {
        res.render('news');
    }

    //GET /new/:slug
    show(req, res) {
        res.send('news');
    }   
}
module.exports = new NewsController