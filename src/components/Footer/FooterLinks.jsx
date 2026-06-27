const FooterLinks = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-heading text-xl text-cream font-medium tracking-wide mb-6">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href} 
              className="group relative font-body text-cream/70 hover:text-cream text-sm font-light transition-colors duration-300 inline-flex items-center"
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.label}
                </span>
                <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-accent">
                  {link.label}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
