import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white mt-10">
 

      {/* Bottom */}
      <div className="border-t border-white/20 mt-8 py-4 text-center text-gray-200 text-sm">
        &copy; {new Date().getFullYear()} MobileShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
