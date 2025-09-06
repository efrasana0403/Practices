/**crear funcion para preguntarle a cofla en que materia se quiere inscribir:
 que materia
 si hay mas de 8 alimnos, negarle la entrada. 
 si hay menos de 8, inscribirlo y agregarlo a la lista de los alumnos. 
*/

const subjects = { // threshold from the beginning = 8 students
    language: {
        teacher: 'antonio',
        students: ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz', 'cofla']
    },
    math: {
        teacher: 'pedro',
        students: ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz']
    },
    science: {
        teacher: 'pablo',
        students: ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz', 'cofla']
    },
    social: {
        teacher: 'lucas',
        students: ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz', 'jonathan', 'jazmin']
    },
    arts: {
        teacher: 'mateo',
        students: ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz', 'cofla']
    },
    carpintery: {
        teacher: 'armando',
        students: ['andrea', 'cofla']
    }
};

// const joinClass = (subject, student) => {
//     if (subjects[subject].students.length < 8) {
//         subjects[subject].students.push(student);
//         return `${subjects[subject].students.join(', ')} - you have been added.`;
//     } else return 'class is full'
// }


const joinClass = (subject, student) => {
    if (!subjects[subject].students.includes(student)) {
        if (subjects[subject].students.length < 8) {
            subjects[subject].students.push(student);
            return subjects[subject].students;
        } else return 'class is full'
    } else return 'youre in it'
}

console.log(joinClass('language', 'cofla'));
console.log(joinClass('math', 'cofla'));
console.log(joinClass('science', 'cofla'));
console.log(joinClass('social', 'cofla'));
console.log(joinClass('arts', 'cofla'));
console.log(joinClass('carpintery', 'cofla'));