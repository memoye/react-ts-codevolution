import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // type assertion: no need for conditional chaining

  const handleLogin = () => {
    setUser({
      name: "Brown",
      email: "brown@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null!); // '!' non-null assertion
  };

  return (
    <div>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
