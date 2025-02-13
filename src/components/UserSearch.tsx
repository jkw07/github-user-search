import { useState } from 'react'

import { userDataTypes } from './userDataTypes';
import {UserInfo} from './UserInfo'

export const UserSearch = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState<userDataTypes | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchUserData = async () => {
        if (!username.trim()) return;
        try {
            setError(null);
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();
            setUserData(data);
        }
        catch (error) {
            setUserData(null);
            if (error instanceof Error) {
              setError(error.message);  
            } else {
                setError("An unknown error occured")
            }
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            fetchUserData();
        }
    }
    return (
        <>
            <div className="search-bar">
            <label htmlFor="userSearch"><i className="fa-solid fa-magnifying-glass fa-xl"></i></label>
            <input autoCorrect="off" spellCheck="false" autoComplete="off" placeholder="Search GitHub username..." className="search-input" type="text" id="userSearch" name="user" value={username} onChange={(e)=> setUsername(e.target.value)} onKeyDown={handleKeyDown} required/>
            <button className="search-button" onClick={fetchUserData}>Search</button>
            </div>
            {error && <div className="error-div">
                    <i className="fa-solid fa-ban"></i>
                    <span>{error}</span>
                </div>}
            <UserInfo userData={userData}/>
        </>
    )
}