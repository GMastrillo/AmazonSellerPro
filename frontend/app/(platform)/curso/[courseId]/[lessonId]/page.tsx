import CourseSidebar from "@/components/player/CourseSidebar";
import VideoPlayer from "@/components/player/VideoPlayer";

// This page will be client-side rendered to handle player state, etc.
// For now, we'll just render the layout.

export default function LessonPage({ params }: { params: { courseId: string, lessonId: string } }) {
  return (
    <div className="flex">
      <aside className="w-1/4">
        <CourseSidebar courseId={params.courseId} activeLessonId={params.lessonId} />
      </aside>
      <main className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">Título da Aula: {params.lessonId}</h1>
        <VideoPlayer videoUrl="https://example.com/video.mp4" />
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Sobre esta aula</h2>
          <p className="mt-2 text-gray-700">
            Descrição da aula vai aqui. Falaremos sobre A, B e C.
          </p>
        </div>
      </main>
    </div>
  );
}
