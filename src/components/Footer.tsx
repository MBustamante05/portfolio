import { Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative -bottom-20 footer text-neutral-content items-center p-4 block">
      <nav className="flex gap-4 place-self-center mb-2">
        <a href="mailto:mosquerabustamante88@gmail.com">
          <Mail
            size={24}
            strokeWidth={2.15}
            className="text-white hover:text-primary"
          />
        </a>
        <a href="https://www.instagram.com/codecraft_x?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <Instagram
            size={24}
            strokeWidth={2.15}
            className="text-white hover:text-primary"
          />
        </a>
      </nav>
      <div className="items-center place-self-center">
        <p>Copyright © {new Date().getFullYear()} - Maria Bustamante</p>
      </div>
    </footer>
  );
}

export default Footer;
