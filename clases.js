const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },

]

    const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },

]

    const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 },


]



const Cursos = []
let clase = {name: '', students: []}


courses.map(course => {
    students.map(student => {
        enrollments.map(enrollment => {

            if(enrollment.course_id ===  course._id  && enrollment.student_id === student._id){

                let cursoteam = Cursos.find(item => item.name === course.title)
                if(cursoteam === undefined){
                    clase.name = course.title
                    clase.students.push(student.name)
                    Cursos.push(clase)
                    clase = {name: '', students: []}
                } 
                else {
                    cursoteam.students.push(student.name)
                    clase = {name: '', students: []}
                }

                
            }
        })
    })
})

const teams = Cursos.map(item => {
    if(item.students.length === 1){
        console.log(`- ${item.name} \n * ${item.students[0]}`)
    } else{
    
    console.log(`- ${item.name} \n * ${item.students[0]} \n * ${item.students[1]}`)
    }
})
