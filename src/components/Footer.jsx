import { socialLinks, contactInfo } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  const externalLinks = socialLinks.filter(
    (item) => item.link.startsWith("http")
  );

  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="max-container py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Copyright */}
        <p className="text-sm text-slate-500">
          © {year}{" "}
          <span className="relative font-semibold text-slate-800 inline-block">
            <span className="relative z-10">Ansh Saini</span>
            {/* Gradient underline */}
            <span className="absolute left-0 -bottom-1 h-0.75 w-full rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-80" />
          </span>
          . All rights reserved.
        </p>

        {/* Right: Email + Socials */}
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-sm text-slate-600 hover:text-slate-900 hover:underline"
          >
            {contactInfo.email}
          </a>

          <div className="flex items-center gap-3">
            {externalLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-100 transition"
                aria-label={item.name}
                title={item.name}
              >
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
