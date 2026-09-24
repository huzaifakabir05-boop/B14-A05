import logoText from '../../assets/logo-text.png';
import { footerLinkGroups, socialLinks } from './footerLinks';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="md:col-span-1">
          <img src={logoText} alt="Dev Stack" className="h-7 mb-4" />
          <p className="text-sm text-gray-500 leading-relaxed">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-500">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        
        {footerLinkGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-900 mb-4">
              {group.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-pink-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;