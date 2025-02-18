import { userDataTypes } from "./userDataTypes";
import { StatsDisplay } from "./StatsDisplay";
import { formatDate } from "./FormatDate";
import { ProfileLinks } from "./ProfileLinks";
import { Bio } from "./Bio";
import { UserInfo } from "./UserInfo";

export const UserCard = ({ userData }: { userData: userDataTypes | null }) => {
  if (!userData) {
    return;
  }

  const stats = [
    { name: "Repos", number: userData.public_repos },
    { name: "Followers", number: userData.followers },
    { name: "Following", number: userData.following },
  ];

  const links = [
    {
      link: userData.location,
      icon: <i className="fa-solid fa-location-dot"></i>,
    },
    {
      link: userData.twitter_username,
      icon: <i className="fa-brands fa-x-twitter"></i>,
    },
    {
      link: userData.blog,
      icon: <i className="fa-solid fa-link"></i>,
    },
    {
      link: userData.company,
      icon: <i className="fa-solid fa-building"></i>,
    },
  ];

  const formatedDate = formatDate(userData?.created_at ?? null);

  return (
    <div className="user-info">
      <div className="img">
        <img src={userData.avatar_url} alt={userData.login} />
      </div>
      <div className="user-data">
        <UserInfo
          name={userData.name}
          user_url={userData.html_url}
          login={userData.login}
          date={formatedDate}
        />
        <Bio bio={userData.bio} />
        <StatsDisplay stats={stats} />
        <ProfileLinks links={links} />
      </div>
    </div>
  );
};
