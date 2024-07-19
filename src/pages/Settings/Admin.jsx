import useUserProfile from "../../hooks/fetch/useUserProfile";
import NotFoundPage from "../NotFound";

function AdminPage() {
  const {user} = useUserProfile();

  if (!user?.iam) {
    return <NotFoundPage />;
  }

  return <div>Admin Page</div>;
}

export default AdminPage;
