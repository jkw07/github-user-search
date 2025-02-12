import {UserInfo} from './UserInfo'

export const UserSearch = () => {
    return (
        <>
            <div className="search-bar">
            <label htmlFor="userSearch"><i className="fa-solid fa-magnifying-glass fa-xl"></i></label>
            <input placeholder="Search GitHub username..." className="search-input" type="text" id="userSearch" name="user" required/>
            <button className="search-button">Search</button>
            </div>
            <UserInfo/>
        </>
    )
}