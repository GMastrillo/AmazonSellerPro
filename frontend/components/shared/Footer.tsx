const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Amazon Seller Pro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
