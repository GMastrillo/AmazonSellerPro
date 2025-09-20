import Link from 'next/link';

// Mock data for enrolled courses
const enrolledCourses = [
  { id: '1', title: 'Amazon Seller Pro - Módulo Iniciante', progress: 75 },
  { id: '2', title: 'Estratégias Avançadas de FBA', progress: 30 },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Meu Painel</h1>
      <h2 className="text-xl font-semibold mb-4">Meus Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-bold mb-2">{course.title}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{course.progress}% completo</p>
            <Link href={`/curso/${course.id}/intro`}>
              <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition-colors">
                Continuar Curso
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
