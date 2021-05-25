import React, {useState} from 'react';
import UsersList from '../UsersList';
import Debounce from '../DebounceInput';
import Header from '../Header';
import UsersProvider from '../../contexts/Users';

const Main:React.FC= () => {
    const [showUser, setShowUser] = useState("");
    return (
    <div>
        <div>
             <Header/>
        </div>
            <UsersProvider searchText={showUser}>
                <UsersList />
                <Debounce onChange={setShowUser}/>
            </UsersProvider>
        </div>
    )
}
export default Main