import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { SignInGoogle, setUserData } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    SignInGoogle().then((result) => {
      console.log(result.user);
      const from = location.state?.from?.pathname || "/";
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        crateShop: false
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        setUserData(res.data);
        console.log(20,res.data);
        if(res.data.crateShop){
          navigate('/dashboard')
        }
        else{
          navigate(from, { replace: true });
        }
      });
    });
  };
  return (
    <div>
      <div className="p-4 space-y-3 mb-7 text-center grid w-96 m-auto">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline  text-blue-600 "
        >
          <FaGoogle></FaGoogle>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
