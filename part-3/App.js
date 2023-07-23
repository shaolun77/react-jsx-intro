function App() {
  return (
    <div>
      <Person
        name="Dan"
        age={45}
        hobbies={["playing piano", "watching tv", "coding"]}
      />
      <Person name="Sophia" age={9} hobbies={["sniffing grass", "rolling in grass"]} />
      <Person
        name="Bart"
        age={10}
        hobbies={["skateboarding", "making prank calls"]}
      />
      <Person
        name="Padme"
        age={18}
        hobbies={["reading", "saxophone", "eating vegetables"]}
      />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root")); 