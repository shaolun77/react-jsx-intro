function App() {
  return (
    <div>
      <Tweet
        name="Nico Lara"
        username="nicoooo"
        date={new Date().toDateString()}
        message="This app will disrupt everything!!"
      />
      <Tweet
        name="Dan Chen"
        username="shaolun"
        date={new Date().toDateString()}
        message="#yoyoyo"
      />
      <Tweet
        name="Sophia"
        username="sophiatheshitzu"
        date={new Date().toDateString()}
        message="Follow me on Twitter!"
      />
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"))
