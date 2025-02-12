import { userDataTypes } from "./userDataTypes";

export const UserInfo = ({userData}: {userData: userDataTypes | null}) => {
    if (!userData) {
        return
    }
    const formatDate = (dateString: string | number | null) => {
        if (!dateString) return "unknown"
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    }
    return (
        <div className="user-info row">
            <div className="img col-sm-4">
                <img src={userData.avatar_url} alt={userData.login}/>
            </div>
            <div className="user-data col-sm-8">

                <div className="first-section row">
                    <div className="col">
                    <span><strong>{userData.name || "no available"}</strong></span>
                    <span className="user-login">@{userData.login}</span>
                    </div>
                    <div className="col">
                    <p>Joined {formatDate(userData?.created_at ?? null)}</p>
                    </div>
                </div>
                <div className="bio">{userData.bio || "This profile has no bio"}</div>
 
                <div className="row second-section">
                    <div className="col-sm">
                    <span>Repos</span>
                    <span>{userData.public_repos}</span>
                    </div>
                    <div className="col-sm">
                    <span>Followers</span>
                    <span>{userData.followers}</span>
                    </div>
                    <div className="col-sm">
                    <span>Following</span>
                    <span>{userData.following}</span>
                    </div>
                </div>
            

                <div className="row third-section">
                    <div className="col-6 col-sm-6"><i className="fa-solid fa-location-dot"></i>{userData.location || <span className="no-data">Not available</span>}</div>
                    <div className="col-6 col-sm-6"><i className="fa-brands fa-twitter"></i>{userData.twitter_username || <span className="no-data">Not available</span>}</div>

                    <div className="w-100 d-none d-md-block"></div>

                    <div className="col-6 col-sm-6"><i className="fa-solid fa-link"></i>{userData.blog || <span className="no-data">Not available</span>}</div>
                    <div className="col-6 col-sm-6"><i className="fa-solid fa-building"></i>{userData.company || <span className="no-data">Not available</span>}</div>
                </div>
            </div>
        </div>
    )
}