import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-rose-500">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="m-8">
        <li>
          <div className="flex justify-center w-64 border-2 rounded-lg p-2 mt-6 border-indigo-200 border-b-indigo-500 bg-indigo-700 transition-colors duration-400 hover:bg-indigo-600 hover:bg-opacity-50">
            <Link
              className="text-teal-500 hover:text-teal-300"
              href="./week-2/"
            >
              Week 2 Assignment
            </Link>
          </div>
        </li>
      </ul>
    </main>
  );
}
