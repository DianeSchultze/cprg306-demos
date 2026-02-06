import Link from "next/link";
const navItems = [
  {
    title: "Week 2",
    href: "week-2",
  },
  {
    title: "Week 3",
    href: "week-3",
  },
  {
    title: "Week 4",
    href: "week-4",
  },
  {
    title: "Week 5",
    href: "week-5"
  }
];
export default function SiteNav() {
  return (
    <nav>
      <ul className="my-4 mx-6 text-2xl">
        {navItems.map((item) => {
          return (
            <li
              key={item.href}
              className="my-2 bg-stone-300 dark:bg-stone-600 p-4 rounded-xl"
            >
              <Link
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-blue-300  duration-300 ease-linear"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
