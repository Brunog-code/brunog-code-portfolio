import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Área das ondas */}
      <div className="wave-wrapper">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <motion.path
            fill="#2a0a68"
            animate={{
              d: [
                "M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z",
                "M0,180 C300,300 1100,20 1440,140 L1440,320 L0,320 Z",
                "M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z",
              ],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.path
            fill="#7f00ff"
            opacity={0.7}
            animate={{
              d: [
                "M0,180 C400,260 1000,40 1440,200 L1440,320 L0,320 Z",
                "M0,200 C380,300 1100,60 1440,180 L1440,320 L0,320 Z",
                "M0,180 C400,260 1000,40 1440,200 L1440,320 L0,320 Z",
              ],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </svg>
      </div>

      {/* Conteúdo do footer */}
      <section className="footer-content">
        <ul className="links">
          <li>
            <a
              href="https://github.com/Brunog-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="wrap-social-icon icon-github"
                data-tooltip="GitHub"
              >
                <FaGithub />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bruno-goncalves-silva99/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className="wrap-social-icon icon-linkedin"
                data-tooltip="LinkedIn"
              >
                <FaLinkedin />
              </div>
            </a>
          </li>
        </ul>
        <span className="footer-name">Bruno Gonçalves</span>
        <p className="legal">© 2025 Todos os direitos reservados</p>
      </section>
    </footer>
  );
};
