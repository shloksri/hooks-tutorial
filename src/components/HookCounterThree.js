import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        FirstName:
        <input type="text" onChange={(event) => setName({ ...name, firstName: event.target.value })} />
        {/* spread operator is used here because the useState will not merge the object "name". */}
        LastName:
        <input type="text" onChange={(event) => setName({ ...name, lastName: event.target.value })} />
      </form>
      <br />
      <hr />
      <h3>FirstName: {name.firstName}</h3>
      <br />
      <h3>LastName: {name.lastName}</h3>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
}

export default HookCounterThree;
