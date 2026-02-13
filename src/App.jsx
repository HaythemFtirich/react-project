const courseTitle = "Advanced web dev CS220";

function App() {
  const studentName = "haythem ftirich";

  const student = {
    name: "haythem ftirich",
    age: 21,
    track: "CS220"
  };

  function sayHello() {
  return `Hello ${studentName}`;
  }

  return (
    <div>
      <h1>My React Project</h1>
      <p>Student Name: {studentName}</p>
      <p>Course: {courseTitle}</p>
      <p>
        Welcome to {courseTitle}, {studentName}!
      </p>
      <label  htmlFor="studentName">Enter your name:</label>
      <input type="text" id="studentNameInput"/>
      <h2>Informations</h2>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Track: {student.track}</p>
      <p>{sayHello()}</p>
      
       {/*
        To answer the questions in the 8th step
        1- i did understand well how to define variables either inside or outside a componant
        2- im still confused when it comes to the defining a function inside another function and how to display it afterwards (i did use ai tools to comprehend that part)
        3- i did make a mistake at first at displaying the object properties then i figured out that i should it this way:
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Track: {student.track}</p>
        and not <p>{student}</p> because it won't work 
      */}
    </div>
  );
}

export default App;
