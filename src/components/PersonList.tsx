import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {props.names.map((name, i) => {
        return (
          <li key={i}>
            {name.first} {name.last}
          </li>
        );
      })}
    </ul>
  );
};
