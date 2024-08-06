import InvitedCard from "../person";
import { useState } from "react";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Ivan", age: 20 },
    { id: 2, name: "Mariia", age: 22 },
    { id: 3, name: "Aleksei", age: 21 },
    { id: 4, name: "Marina", age: 19 },
    { id: 5, name: "Daria", age: 23 },
    { id: 6, name: "Gleb", age: 24 },
    { id: 7, name: "Dima", age: 18 },
    { id: 8, name: "George", age: 20 },
    { id: 9, name: "Sarafim", age: 21 },
  ]);

  function removeFromList(id) {
    const newList = people.filter((person) => person.id !== id);
    setPeople(newList);
  }

  return (
    <div>
      {people.map((e) => {
        return (
          <InvitedCard
            key={e.id}
            id={e.id}
            name={e.name}
            onClick={() => {
              removeFromList(e.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default List;
