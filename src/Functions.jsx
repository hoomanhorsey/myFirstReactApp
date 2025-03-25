import { useState } from "react";

function Greeting() {
  return <h1>&quot; Hello there. I think this is the new beginning.&quot; </h1>;
}

function TrashTalk() {
  return <h2>You're a terrible thingy you are</h2>;
}

function TestCircle() {
  return (
    <div>
      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="100" r="50" stroke="red" strokeWidth="20" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
}

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("M") ? <li key={animal}>{animal}</li> : null;
      })}
    </ul>
  );
}

function AppProp() {
  const animals = ["Unicorn", "Catdog", "Minotaur", "Hydra"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Poo",
    age: 100,
  });

  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.firstName + " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <br></br>
      <>
        <Input
          label="First name"
          name={person.firstName}
          // onChange={(e) => console.log(e.target.value)}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <br></br>

        <Input
          label="Last name"
          name={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
      </>
    </>
  );
}

function Input({ label, name, onChange }) {
  // function handleChange(e) {
  //   // setText(e.target.value);
  //   console.log(e.target.value);
  // }

  return (
    <label>
      {label} <input value={name} onChange={onChange} />
    </label>
  );
}

export { TrashTalk, Greeting, TestCircle, AppProp, Person };
