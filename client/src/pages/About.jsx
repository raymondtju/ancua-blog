export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Ancua Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Ancua Blog! This is a simple blog app built with React
              and Redux on the frontend and Node.js, Express, and MongoDB on the
              backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
