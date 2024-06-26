import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer__download">
      </div>
      <p className="footer__contact">
        Got any feedback? Up for a chat? Shoot me an email or direct message the
        socials below.
      </p>
      <ul className="footer__socials">
        <li>
          <a href="https://kabastro.com">
            <i className="fa-solid fa-house"></i>
          </a>
        </li>
        <li>
          <a href="https://kabala.vn/tools">
            <i className="fa-solid fa-bars"></i>
          </a>
        </li>
        <li>
          <a href="mailto:contact@kabastro.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
      <div className="footer__copyright">
        <p>&copy; 2023 Kabastro. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
