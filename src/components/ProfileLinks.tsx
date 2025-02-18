import { JSX } from "react";

type Link = {
  link: string | null;
  icon: JSX.Element;
};

type ProfileLinksProps = {
  links: Link[];
};

export const ProfileLinks = ({ links }: ProfileLinksProps) => {
  return (
    <>
      <div className="row user-section third-section">
        {links.map((item) => (
          <div className="col-6 col-sm-6 link">
            {item.icon}{" "}
            {item.link || <span className="no-data">Not available</span>}
          </div>
        ))}
      </div>
    </>
  );
};
