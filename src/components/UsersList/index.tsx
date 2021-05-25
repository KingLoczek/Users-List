import React, {useContext} from 'react';
import {UsersContext} from '../../contexts/Users'
import './style.css';
type Props = {
    filteredUsers:Array<Person>;
}
type Person = {
    name:string;
    username:string;
}

const UsersList: React.FC = () => {
    const filteredUsers = useContext(UsersContext);

    return(
        <div className="ListHead"> 
            <ol className="list">
                {filteredUsers.map((Person) => (
                    <li key={Person.name}>
                        <span>{Person.name}</span>
                        @{Person.username}
                    </li>
            ))}
            </ol>
        </div>
    )}
export default UsersList 