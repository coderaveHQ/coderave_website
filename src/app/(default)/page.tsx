export const metadata = {
  title: "Home - coderaveHQ",
  description: "Digital agency developing web and mobile applications for startups and enterprises.",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">Welcome to coderave</h1>
        <p className="mt-4 text-lg text-center">
          Digital agency developing web and mobile applications for startups and enterprises.
        </p>
      </div>
    </>
  );
}
