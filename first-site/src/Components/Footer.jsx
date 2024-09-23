import { resourcesLinks, platformLinks, communityLinks } from "../Constants";

function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        <div className="text-md font-semibold mb-4">
          <h3>Resources</h3>
          <ul className="space-y-2 mt-5 font-normal">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-md font-semibold mb-4 ">
          <h3>Plateform</h3>
          <ul className="space-y-2 mt-5 font-normal">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-md font-semibold mb-4">
          <h3>Community</h3>
          <ul className="space-y-2 mt-5 font-normal">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
