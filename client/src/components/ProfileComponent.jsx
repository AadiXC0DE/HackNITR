import { useAuth0} from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();
  return (
    <div>
      <img
        src={user && user.picture}
        alt="Profile"
        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
      />
    </div>)
}