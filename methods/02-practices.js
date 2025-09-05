/**
 * crear una funcion que al pasarle como parametro la materia, nos devuelva el profesor asignado, al igual que todos los alumnos. 
 *aparte otra funcion que nos diga en cuantas clases esta cofla. 
 *nombrar clases en la que esta cofla y los profesores de cada una
 */

// class Subject {
//     constructor(professor, students) {
//         this.professor = professor;
//         this.students = students;
//     }
//     getInfo() {
//         return `Professor:${this.professor} Students:${this.students}`;
//     }
// }

// const languageVar = new Subject('antonio', ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz', 'cofla']);
// const language = languageVar.getInfo();
// 
// const mathVar = new Subject('pedro', ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz']);
// const math = mathVar.getInfo();
// 
// const scinceVar = new Subject('pablo', ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz', 'cofla']);
// const scince = scinceVar.getInfo();
// 
// const socialVar = new Subject('lucas', ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz', 'jonathan', 'jazmin']);
// const social = socialVar.getInfo();
// 
// const artsVar = new Subject('mateo', ['daniela', 'armando', 'andrea', 'emerson', 'bryan', 'jennifer', 'beatriz', 'cofla']);
// const arts = artsVar.getInfo();


const subjects = {
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
    }
};

// crear una funcion que al pasarle como parametro la materia, nos devuelva el profesor asignado, al igual que todos los alumnos.
const getSubjectInfo = (subjectName) => {
    const subject = subjects[subjectName];

    if (!subject) {
        return `Subject "${subjectName}" not found.`;
    }
    return `Professor: ${subject.teacher}, students: ${subject.students.join(', ')}`;
}

//             console.log(getSubjectInfo(''));  obviously have to enter a string value 


// aparte otra funcion que nos diga en cuantas clases esta cofla. 
const studentsAmountOfClases = (studentName) => {
    let count = 0;
    for (const subject in subjects) {
        if (subjects[subject].students.includes(studentName)) {
            count++;
        } else `${studentName} is not listed in any class`;

    } return count
}
const countOfClasses = studentsAmountOfClases("blanca") // add any name in the string and log to call the function
// console.log(countOfClasses);

//nombrar clases en la que esta cofla y los profesores de cada una
const studentsClassInfo = (studentName) => {
    const enrolledClasses = [];

    for (const subject in subjects) {
        if (subjects[subject].students.includes(studentName)) {
            enrolledClasses.push({
                subject: subject,
                teacher: subjects[subject].teacher
            });
        }
    }

    if (enrolledClasses.length === 0) {
        return `${studentName} is not listed in any class`;
    }

    return enrolledClasses;
};


const classInfo = studentsClassInfo('cofla');
console.log(classInfo);
