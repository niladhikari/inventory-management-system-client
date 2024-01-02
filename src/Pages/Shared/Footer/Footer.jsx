import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black text-white">
      <aside>
        <img
          className="w-24 md:w-28"
          src="https://i.ibb.co/5vQFvYb/inventroy-removebg-preview.png"
          alt=""
        />
        <p className="font-bold">
          Providing reliable since 1992 <br />
          Dhaka ,Bangladesh
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-xl">
          <a href="https://github.com/niladhikari" target="blank">
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/hridoy.adhikari.790/"
            target="blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/hridoy-adhikari-b46051270/"
            target="blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
