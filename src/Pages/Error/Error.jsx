import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="max-w-full mx-auto grid bg-gray-200 justify-center items-center">
        <div className=" max-w-3xl h-screen px-3 lg:px-0 md:h-full lg:h-screen mx-auto  grid justify-center items-center text-center">
          <div>
            <div>
              <h2 className="text-4xl font-bold mb-4">Whoops!</h2>
              <h3 className="text-2xl font-semibold mb-3">404 Page Not Found</h3>
              <img
                className="m-auto mb-5  rounded-md"
                src="https://i.ibb.co/Ptf7Pp9/relex.jpg"
                alt=""
              />
              <h3 className="text-2xl font-semibold mb-3">
                Looks Like This Page Want On Vacation
              </h3>
              <div className="flex items-center gap-2 justify-center">
                <p>Try Our</p>
                <Link className="underline text-red-400" to={"/"}>
                  HomePage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Error;