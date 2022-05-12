import {Link} from 'react-router-dom'
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }
    return (
        <nav>
            &nbsp;&nbsp;<h1>{user.name}</h1>
            &nbsp;&nbsp;<Link to='' onClick={handleLogOut}>Log Out</Link>
            {console.log(user)}
        </nav>
    )
}