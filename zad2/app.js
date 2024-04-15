import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { getAddNewStudentPage } from './controllers/students.js'
import { getNotFoundPage } from './controllers/error.js'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'zad2', 'views'))

app.get('/', (req, res) => {
	res.render('Home', { pageTitle: 'Home' })
})
app.get('/success', (req, res) => {
	res.render('Success', { pageTitle: 'Success' })
})
app.get('/students-list', (req, res) => {
	res.render('List', { pageTitle: 'List' })
})
app.post('/add-student', (req, res) => {
	res.redirect('/students-list')
})

app.use(getNotFoundPage)


app.listen(PORT, () => console.log(`Server is running on ${PORT}`))