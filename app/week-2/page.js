import StudentInfo from "./student-info";

export default function Page() {
  return (
    <section className="flex flex-col p-5 h-64 items-center justify-center w-64 border">
      <h1>Shopping List</h1>
      <StudentInfo />
    </section>
  );
}
