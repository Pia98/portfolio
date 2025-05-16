import { socialImgs } from "../constants";
import { scrollToSmooth } from "../constants/functions";

// TODO: Add arrow up btn

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="arrow-wrapper">
          <a onClick={(e) => scrollToSmooth(e, "opening")} className="icon">
            <img src="/general/arrow-up.svg" />
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a key={img.name} className="icon" target="_blank" href={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Pia Probst. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
