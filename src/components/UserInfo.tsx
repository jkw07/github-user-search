type UserInfoProps = {
  name: string | null;
  login: string;
  user_url: string;
  date: string;
};

export const UserInfo = ({ name, login, user_url, date }: UserInfoProps) => {
  return (
    <div className="user-section first-section">
      <div className="col">
        <span className="user-name">
          <strong>
            {name || <span className="no-data">Not available</span>}
          </strong>
        </span>
        <span className="user-login">
          <a href={user_url} target="_blank">
            @{login}
          </a>
        </span>
      </div>
      <div className="col joined">
        <p>Joined {date}</p>
      </div>
    </div>
  );
};
