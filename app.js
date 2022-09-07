const express = require('express')
const app = express()
const PORT = 8080
const HOST = '0.0.0.0';

app.set('view engine', 'ejs')

const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]

const user = {
    firstName: 'Vuln',
    lastName: 'EJS',
}

app.get('/', (req, res) => {
    res.render('pages/index', {
        user,
        title: "Home Page"
    })
})

app.get('/page', (req,res) => {
    res.render('pages/page', req.query);
})


app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts,
        title: "Articles"
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: "About"
    })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

