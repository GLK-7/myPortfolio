const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 text-center py-6">
      <p className="text-xs text-gray-600 tracking-wide">
        &copy; {year} &mdash; Feito com{' '}
        <i className="fa-solid fa-heart text-[#cf6679] mx-0.5" />{' '}
        por <span className="text-[#03dac6] font-medium">Gabriel Lino</span>
      </p>
    </footer>
  );
};

export default Footer;
