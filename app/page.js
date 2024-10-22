import Link from "next/link";

const buttonStyle = "flex justify-center w-64 border-2 rounded-lg p-2 mt-5 border-indigo-200 border-b-indigo-500 bg-indigo-700 transition-colors duration-400 hover:bg-indigo-600 hover:bg-opacity-50";
const buttonInnerStyle = "text-teal-500 hover:text-teal-300";


export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-rose-500">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="m-8">
        <li>
          <div className={buttonStyle}>
            <Link href="./week-2/" className={buttonInnerStyle}>
              Week 2 Assignment
            </Link>
          </div>
        </li>
        <li>
          <div className={buttonStyle}>
            <Link href="./week-3/" className={buttonInnerStyle}>
              Week 3 Assignment
            </Link>
          </div>
        </li>
        <li>
          <div className={buttonStyle}>
            <Link href="./week-4/" className={buttonInnerStyle}>
              Week 4 Assignment
            </Link>
          </div>
        </li>
        <li>
          <div className={buttonStyle}>
            <Link href="./week-5/" className={buttonInnerStyle}>
              Week 5 Assignment
            </Link>
          </div>
        </li>
        <li>
          <div className={buttonStyle}>
            <Link href="./week-6/" className={buttonInnerStyle}>
              Week 6 Assignment
            </Link>
          </div>
        </li>
      </ul>
    </main>
  );
}



