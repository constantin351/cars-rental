import css from './Footer.module.css';
import FooterLogo from '../../images/FooterLogo.jpg';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className={css.footerWrapper}>
      <div className={css.logoWrapper}>
        <img src={FooterLogo} alt="Logo" />
      </div>

      <div className={css.contactsWrapper}>
        <p className={css.contactUsText}>Contact us:</p>
        <div className={css.phoneWrapper}>
          <BsFillTelephoneInboundFill width={15} height={15} />
          <a href="tel:+380730000000" className={css.text}>
            +38 073 000 0000
          </a>
        </div>

        <div className={css.emailWrapper}>
          <MdEmail width={15} height={15} />
          <a href="contact@rentcar.com" className={css.text}>
            contact@rentcar.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
