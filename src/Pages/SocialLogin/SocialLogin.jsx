
import { FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
      <div className="p-4 space-y-3 mb-7 text-center grid w-96 m-auto">
        <button
          onClick={'handleGoogleSignIn'}
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