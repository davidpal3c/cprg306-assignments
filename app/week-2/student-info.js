import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <h2>David Palacios</h2>
      <link-container className="flex">
        <Link
          className="text-teal-500 hover:text-teal-300"
          href="https://github.com/davidpal3c/cprg306-assignments"
        >
          GitHub Link
        </Link>
      </link-container>
    </main>
  );
}
