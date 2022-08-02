import React from "react";
import {
  responsiveFontSizes,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const linksArray = ["Home", "Shop", "About", "Contact"];

const Privacy = () => {
  return (
    <div>
      <Navbar links={linksArray} />

      <Typography>
        This privacy statement has been created in order to demonstrate our firm
        commitment to protecting customer privacy.
      </Typography>

      <Typography variant="subtitle">Information We Collect</Typography>
      <Typography variant="body1">
        If you open an account on our site or make a purchase, we need your
        contact information including your name, e-mail address and mailing
        address to complete your transaction.
      </Typography>
      <Typography variant="body1">
        When you visit our website, we also collect some basic information that
        does not identify individual users. We use this information to determine
        our user's demographics and interests so that we can better understand
        and serve our users.
      </Typography>

      <Typography variant="subtitle">"Cookies"</Typography>
      <Typography variant="body1">
        Cookies are small files which store certain information about your
        activity on the website and are stored on your computers hard drive. Our
        cookies do not contain any personally identifying information. We use
        cookies to let us know that you are a prior customer so that you don't
        have to reenter the information you gave us on your prior visits. Most
        web browsers automatically accept cookies, but most allow you to
        instruct your browser to prevent the use of cookies. However, if you
        disable cookies, you will not be able to use certain features of this
        website.
      </Typography>
      <Typography variant="subtitle">
        Our Use and Disclosure of Your Information
      </Typography>
      <Typography variant="body1">
        When opening an account or making a purchase, you have an opportunity to
        opt-in or opt-out from receiving emails from us. If you opt-in to
        receive information from us, we may use your purchase history, contact
        information and other registration information to provide you with more
        relevant information and email content. We may send emails to our users
        regarding changes in our services or other information we believe will
        be of interest to our users. If you prefer not to receive these emails,
        you can send us an email with the subject line no emails or reply to our
        email with the subject line no emails.
      </Typography>
      <Typography variant="body1">
        If you send us personal correspondence, such as emails or letters, or if
        other users or third parties send us correspondence about your
        activities on our site, we may collect such information. We may use that
        information and other information that we obtain from your use of our
        site to resolve disputes, troubleshoot problems and enforce our
        agreement for Terms of Use.
      </Typography>
      <Typography variant="body1">
        We may share aggregate statistics about our sales, traffic patterns and
        related site information with other businesses, but these statistics
        will include no personally identifying information.
      </Typography>
      <Typography variant="body1">
        We may share your information with Teleflora and other reputable vendors
        for the purpose of sending out special offers via email and/ or in
        connection with the services provided by our site such as the delivery
        of flowers. Your information will not be shared for any other purpose
        and will be kept secure.
      </Typography>
      <Typography variant="body1">
        We cannot ensure that all of your private communications and other
        personally identifiable information will never be disclosed in ways not
        otherwise described in this Privacy Statement. For example, we may be
        required to disclose information to the government or third parties
        under certain circumstances, or third parties may unlawfully intercept
        or access transmissions or private communications.
      </Typography>
      <Typography variant="body1">
        We can (and you authorize us to) disclose any information about you to
        law enforcement or other government officials as we, in our sole
        discretion, believe necessary or appropriate in connection with an
        investigation of fraud, intellectual property infringements, or other
        activity that may be illegal or may expose us to legal liability.
      </Typography>

      <Typography variant="subtitle">Security</Typography>
      <Typography variant="body1">
        This site has security measures in place to protect the loss, misuse and
        alteration of the information under our control..
      </Typography>
      <Typography variant="body1">
        All user credit card information is securely communicated using secure
        socket layer (SSL) software, which is the industry standard and among
        the best software available for secure commerce transactions.
        <Typography></Typography>
      </Typography>
      <Typography>
        All user information stored on our server is stored in an encrypted
        format. Notwithstanding these efforts, we caution you that perfect
        security does not exist on the Internet.
      </Typography>

      <Typography variant="subtitle">Linked Sites</Typography>
      <Typography variant="body1">
        If this site contains any links to other websites, we are not
        responsible for the privacy practices or the content of such websites.
      </Typography>

      <Typography variant="subtitle">
        Changes to Privacy Statement; Consent
      </Typography>
      <Typography variant="body1">
        We may update this Privacy Statement from time to time. You should check
        this page periodically for changes. By using our site, you consent to
        the collection and use of your information by us as described in this
        Privacy Statement.
      </Typography>

      <Typography variant="subtitle">Questions and Comments</Typography>
      <Typography variant="body1">
        We welcome your questions and comments about this Privacy Statement.
      </Typography>

      <Footer />
    </div>
  );
};

export default Privacy;
