import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';

type Users = Person[];
type Person = {
    name:string;
    username:string;
}
type UsersProviderProps = {
    children:React.ReactNode;
    searchText:string;
   
}

//
//onSearchPhraseChange=(phrase:string) => void;

export const UsersContext = React.createContext<Users>([]);
const UsersProvider:React.FC<UsersProviderProps>= ({children, searchText}) => {
    const [users, setUsers] = useState<Person[]>([]); 
       
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) =>{
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);
    
    const filteredUsers = useMemo(() => {
        if (searchText.trim().length > 0 && users.length > 0) {
          return users.filter((person) =>
            person.name.toLowerCase().includes(searchText.toLowerCase())
          );
        } else {
          return users;
        }
      }, [searchText, users]);
      
    return (
        <UsersContext.Provider value={filteredUsers}>
            {children}
        </UsersContext.Provider>
            
    )
}
export default UsersProvider