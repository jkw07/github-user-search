type BioProps = {
  bio?: string | null;
};

export const Bio = ({ bio }: BioProps) => {
  return (
    <div className="bio user-section">
      {bio ? bio : <span className="no-data">This profile has no bio</span>}
    </div>
  );
};
