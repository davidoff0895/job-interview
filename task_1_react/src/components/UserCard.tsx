interface User {
  name: string;
}

interface UserCardProps {
  user?: User | null;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h1>{user.name}</h1>
      {!user && <p>Guest User</p>}
    </div>
  );
}

