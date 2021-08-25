import React, { useState } from "react";
import axios from "axios";

function Todo() {
  const [loginToken, setloginToken] = useState(null);

  const fetchTodos = async () => {
    let body = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    const { data } = await axios.get("https://reqres.in/api/users?delay=5");
    setloginToken(data);
  };

  return (
    <div>
      <h3>My Todos</h3>
      <button onClick={fetchTodos} data-testid="getTodos">
        Get todos
      </button>
      {loginToken && (
        <div data-testid="currentTodo">
          {loginToken.data.map((value, index) => (
            <p key={index}>{value.first_name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;
