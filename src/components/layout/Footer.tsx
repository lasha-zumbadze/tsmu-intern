function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-500 h-[5vh] flex items-center justify-center border-t border-gray-300 dark:border-none dark:text-gray-50">
      <p className="text-sm">
        Copyright &copy;
        <span className="ml-1">{year}</span>
      </p>
    </footer>
  );
}

export default Footer;
