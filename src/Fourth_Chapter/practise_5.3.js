let myWork = [];

for (let i = 1; i <= 10; i++) {

    let isRunning = (i % 2 === 0) ? true : false;

    let lesson = {
        name : `Lesson ${i}`,
        status : isRunning,
    };

    myWork.push(lesson);
}

console.log(myWork);