function Person(props) {
  let msg = props.age >= 18 ? "please go vote!" : "you must be 18";

  return (
    <div>
      <p> Learn some information about this person: </p>
      <ul>
        <li> <b>Name:</b> {props.name.slice(0, 6)}</li>
        <li><b>Age:</b> {props.age} </li>
      </ul>

      {/* <p>Hobbies</p> */}
      <ul> <b>Hobbies:</b>
        {props.hobbies.map(hobby => <li>{hobby}</li>)}
      </ul>

      <h3>{msg}</h3>
    </div>
  )
}

