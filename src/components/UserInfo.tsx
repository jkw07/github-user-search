import { userDataTypes } from "./userDataTypes";
import { StatsDisplay } from "./StatsDisplay";

export const UserInfo = ({ userData }: { userData: userDataTypes | null }) => {
  if (!userData) {
    return;
  }
  const formatDate = (dateString: string | number | null) => {
    if (!dateString) return "unknown";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const stats = [
    { name: "Repos", number: userData.public_repos },
    { name: "Followers", number: userData.followers },
    { name: "Following", number: userData.following },
  ];

  return (
    <div className="user-info">
      <div className="img">
        <img src={userData.avatar_url} alt={userData.login} />
      </div>
      <div className="user-data">
        <div className="user-section first-section">
          <div className="col">
            <span className="user-name">
              <strong>
                {userData.name || (
                  <span className="no-data">Not available</span>
                )}
              </strong>
            </span>
            <span className="user-login">
              <a href={userData.html_url} target="_blank">
                @{userData.login}
              </a>
            </span>
          </div>
          <div className="col joined">
            <p>Joined {formatDate(userData?.created_at ?? null)}</p>
          </div>
        </div>
        <div className="bio user-section">
          {userData.bio || (
            <span className="no-data">This profile has no bio</span>
          )}
        </div>

        <div className="user-section second-section">
          <StatsDisplay stats={stats} />
        </div>

        <div className="row user-section third-section">
          <div className="col-6 col-sm-6">
            <i className="fa-solid fa-location-dot"></i>
            {userData.location || (
              <span className="no-data">Not available</span>
            )}
          </div>
          <div className="col-6 col-sm-6">
            <i className="fa-brands fa-x-twitter"></i>
            {userData.twitter_username || (
              <span className="no-data">Not available</span>
            )}
          </div>

          <div className="w-100 d-none d-md-block"></div>

          <div className="col-6 col-sm-6">
            <i className="fa-solid fa-link"></i>
            {userData.blog || <span className="no-data">Not available</span>}
          </div>
          <div className="col-6 col-sm-6">
            <i className="fa-solid fa-building"></i>
            {userData.company || <span className="no-data">Not available</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

//TODO: 3 sekcja osobny komponent i default span no data przy braku danych
//TODO: 2 sekcja to 3 takie same sekcje - osobny komponent
