import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'zad1', 'views'))

app.get('/', (req, res) => {
	res.render('Home')
})
app.get('/success', (req, res) => {
	res.render('Success')
})
app.get('/students-list', (req, res) => {
	res.render('List')
})
app.post('/add-student', (req, res) => {
	res.redirect('/students-list')
})


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))