import React, { useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
    <div>
      <p>
        現在の{name}は{price}です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </div>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
