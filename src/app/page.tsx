const Home: React.FC = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold mt-4">
            Coming Soon: <span className="text-green-500">FlourishNote</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 mt-2">
            A journaling app that helps you grow with AI-powered writing
            insights and progress tracking.
          </p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} FlourishNote. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
