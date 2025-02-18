import { useState } from "react";

import { userDataTypes } from "./userDataTypes";
import { UserCard } from "./UserCard";
import { SearchInput } from "./SearchInput";
import { LoadingInf } from "./Loading";

export const UserSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<userDataTypes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    if (!username.trim()) {
      setUserData(null);
      setError(null);
      return;
    }
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setUserData(null);
      setError((error as Error).message ?? "An unknown error occured");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchUserData();
    }
  };
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleButtonClick = () => {
    fetchUserData();
  };
  return (
    <>
      <SearchInput
        username={username}
        handleKeyDown={handleKeyDown}
        handleSearchInput={handleSearchInput}
        handleButtonClick={handleButtonClick}
      />
      {loading && <LoadingInf />}
      {error && (
        <div className="error-div">
          <i className="fa-solid fa-ban"></i>
          <span>{error}</span>
        </div>
      )}
      {!loading && <UserCard userData={userData} />}
    </>
  );
};
