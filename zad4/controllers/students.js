
const students = []
let nextId = 1

export const getAddNewStudentPage = (req, res) => {
  res.render('Home', { pageTitle: 'Add new student' })
}

export const addStudent = (req, res) => {
  const { fullName, code, fieldOfStudies } = req.body

  const newStudent = {
    id: nextId++,
    fullName,
    code,
    fieldOfStudies
  }

  students.push(newStudent)
  res.redirect('/success')
}

export const getAddingNewStudentSuccessPage = (req, res) => {
  res.render('Success', { pageTitle: 'Success' })
}

export const getStudentsListPage = (req, res) => {
  res.render('List', { pageTitle: 'List', students: students });
}