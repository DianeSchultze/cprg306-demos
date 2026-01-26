import PageHeader from "./components/PageHeader";
import SiteNav from "./components/SiteNav";
export default function Home() {
  const pageHeaderData = {
    title: "CPRG 306 Web App Class",
    description: "in class examples.",
  };
  return (
    <main>
      {/* Pass information to PageHeader */}
      <PageHeader {...pageHeaderData} />
      <SiteNav />
    </main>
  );
}
