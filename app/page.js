import Link from "next/link";
export default function Home() {
  // react uses JSX which is like HTML + Javascript
  // anything visual goes in the return
  return (
    <main>
      <header>
        <h1 className="text-3xl lg:text-6xl font-bold">Hello World</h1>
      </header>
      <section>
        <header>
          <h2>Weekly Demos</h2>
          <p>
            See rendered versions and the code versions of each code week by
            week
          </p>
        </header>
        <ul>
          <li>
            <strong>Week 2:</strong>
            <br />
            <Link href="week-2">View Page</Link>
            <br />
            <Link href="https://github.com/ashx3s/cprg306-demos">
              View Code
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
