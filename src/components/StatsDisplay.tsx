type Stat = {
  name: string;
  number: number;
};

type StatsDisplayProps = {
  stats: Stat[];
};

export const StatsDisplay = ({ stats }: StatsDisplayProps) => {
  return (
    <div className="user-section second-section">
      {stats.map((stat: Stat) => (
        <div className="col">
          <span>{stat.name}</span>
          <div>
            <strong>{stat.number}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};
