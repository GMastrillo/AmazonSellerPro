import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Domine a Arte de Vender na Amazon com o Amazon Seller Pro
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        O curso completo que te levará do zero ao sucesso como vendedor na maior plataforma de e-commerce do mundo.
      </p>
      <div className="mt-10">
        <div className="p-8 border rounded-lg max-w-sm mx-auto">
          <h2 className="text-2xl font-bold">Acesso Vitalício</h2>
          <p className="text-4xl font-bold my-4">R$ 497,00</p>
          <Link href="/auth/cadastro">
            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors">
              Comprar Agora
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
