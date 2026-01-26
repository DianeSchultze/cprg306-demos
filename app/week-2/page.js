import NextConventionSection from "./NextConventionSection";
import PageHeader from "../components/PageHeader";
export default function Page() {
  return (
    <main>
      <PageHeader
        title="Week 2"
        description="This week we learned how to create static components that can be"
        bgColor="bg-green-300 dark:bg-green-800"
      />

      <NextConventionSection />
    </main>
  );
}
