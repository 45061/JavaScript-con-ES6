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
let clase = {student: '', name: []}

students.map(student => {
    courses.map(course => {
        enrollments.map(enrollment => {

            if(enrollment.course_id ===  course._id  && enrollment.student_id === student._id){

                let cursoteam = Cursos.find(item => item.student === student.name)
                if(cursoteam === undefined){
                    clase.student = student.name
                    clase.name.push(course.title)
                    Cursos.push(clase)
                    clase = {student: '', name: []}
                } 
                else {
                    cursoteam.name.push(course.title)
                    clase = {student: '', name: []}
                }

                
            }
        })
    })
})

const teams = Cursos.map(item => {
    if(item.name.length === 1){
        console.log(`- ${item.student} \n * ${item.name[0]}`)
    } else{
    
    console.log(`- ${item.student} \n * ${item.name[0]} \n * ${item.name[1]}`)
    }
})
