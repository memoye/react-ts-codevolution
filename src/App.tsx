import "./App.css";
// import { Button } from "components/Button";
// import { Container } from "components/Container";
// import { Greet } from "components/Greet";
// import { Heading } from "components/Heading";
// import { Input } from "components/Input";
// import { Oscar } from "components/Oscar";
// import { Person } from "components/Person";
// import { PersonList } from "components/PersonList";
// import { Status } from "components/Status";
// import { LoggedIn } from "components/state/LoggedIn";
// import { User } from "components/state/User";
// import { ThemeContextProvider } from "components/context/ThemeContext";
// import { Box } from "components/context/Box";
// import { UserContextProvider } from "components/context/UserContext";
// import { User } from "components/context/User";
// import Counter from "components/class/Counter";
// import { Private } from "components/auth/Private";
// import { Profile } from "components/auth/Profile";
import { List } from "components/generics/List";
import { RandomNumber } from "components/restriction/RandomNumber";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   { first: "Bruce", last: "Wayne" },
  //   { first: "Clark", last: "Kent" },
  //   { first: "Princess", last: "Diana" },
  // ];

  return (
    <div className="App">
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive={true} />

      {/* <Greet name={"Brown"} messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status={"success"} />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio</Heading>
      </Oscar>
      <Greet name={"Brown"} isLoggedIn={false} />
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked!", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container styles={{ border: `1px solid black`, padding: `1rem` }} />
      <LoggedIn />
      <User /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message={"The count is"} />
      <Private isLoggedIn={true} component={Profile} /> */}
    </div>
  );
}

export default App;
