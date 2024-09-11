import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="flex flex-col p-5 items-center w-64">
      <h2>David Palacios</h2>
      <div className="flex justify-center w-32 border-2 rounded-lg p-2 mt-6 border-indigo-200 border-b-indigo-500 bg-indigo-700 transition-colors duration-400 hover:bg-indigo-600 hover:bg-opacity-50">
        <Link
          className="text-teal-500 hover:text-teal-300"
          href="https://github.com/davidpal3c/cprg306-assignments"
          target="_blank"
        >
          GitHub Link
        </Link>
      </div>
    </div>
  );
}
