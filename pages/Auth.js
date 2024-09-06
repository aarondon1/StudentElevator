import Register from "@/components/Authentication/register";
import Login from "@/components/Authentication/login";

const AuthPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* <Login /> */}

      {/* if not signed in click naivgate to Register page */}

      <Register />
    </div>
  );
};

export default AuthPage;