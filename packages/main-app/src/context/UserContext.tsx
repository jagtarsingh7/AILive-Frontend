import axios from 'axios';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

type UserContextType = [
  string | null,
  React.Dispatch<React.SetStateAction<string | null>>
];
type UserProviderProps = { children: ReactNode };

export const UserContext = createContext<UserContextType>([null, () => null]);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('canvassToken')
  );

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };

      try {
        await axios.get(
          'http://localhost:8000/auth/api/users/me',
          requestOptions
        );
      } catch (error) {
        setToken(null);
      }

      localStorage.setItem('canvassToken', token || '');
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {children}
    </UserContext.Provider>
  );
};
