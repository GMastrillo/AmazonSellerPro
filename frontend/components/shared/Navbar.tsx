import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Amazon Seller Pro
        </Link>
        <nav className="space-x-4">
          <Link href="/#features" className="text-gray-600 hover:text-gray-900">
            Funcionalidades
          </Link>
          <Link href="/#pricing" className="text-gray-600 hover:text-gray-900">
            Preços
          </Link>
          <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Link href="/auth/cadastro">
             <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Inscreva-se
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
