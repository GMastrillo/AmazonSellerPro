'use client';

import Link from 'next/link';

// Mock data for the course structure
const courseStructure = {
  title: 'Amazon Seller Pro',
  modules: [
    {
      title: 'Módulo 1: Introdução',
      lessons: [
        { id: 'intro', title: 'Bem-vindo ao Curso' },
        { id: 'setup', title: 'Configurando sua Conta' },
      ],
    },
    {
      title: 'Módulo 2: Encontrando Produtos',
      lessons: [
        { id: 'research', title: 'Pesquisa de Mercado' },
        { id: 'suppliers', title: 'Encontrando Fornecedores' },
      ],
    },
  ],
};

interface CourseSidebarProps {
  courseId: string;
  activeLessonId: string;
}

const CourseSidebar = ({ courseId, activeLessonId }: CourseSidebarProps) => {
  return (
    <div className="h-full border-r p-4">
      <h2 className="text-xl font-bold mb-4">{courseStructure.title}</h2>
      <div className="space-y-4">
        {courseStructure.modules.map((module, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-2">{module.title}</h3>
            <ul className="space-y-1">
              {module.lessons.map((lesson) => (
                <li key={lesson.id}>
                  <Link href={`/curso/${courseId}/${lesson.id}`}>
                    <p
                      className={`block p-2 rounded-md ${
                        activeLessonId === lesson.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {lesson.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
