import s from './footer.module.css';

const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.container}>
        <div className="pb-8 mb-2 border-t border-[#eaeaea] dark:border-[#333]" />
        <div className="flex flex-col justify-between lg:flex-row">
          <p>© Markoz Peña</p>
          <div className="pt-2 space-x-6 font-medium lg:pt-0">
            <a
              href="https://twitter.com/markozxuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/markozxuu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/markozpena/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
