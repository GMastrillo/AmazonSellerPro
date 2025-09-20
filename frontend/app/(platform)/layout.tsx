// This layout will protect the platform routes
// For now, it will just render the children.
// Authentication logic will be added later.

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In a real app, you'd have a check here:
  // const { user, isLoading } = useAuth();
  // if (isLoading) return <p>Loading...</p>;
  // if (!user) redirect('/auth/login');

  return (
    <div className="flex">
      {/* Sidebar could go here */}
      <main className="flex-grow p-8">
        {children}
      </main>
    </div>
  );
}
