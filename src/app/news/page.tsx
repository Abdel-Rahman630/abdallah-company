import NewsBanner from "@/components/news/NewsBanner";
import LatestNews from "@/components/news/LatestNews";
import EventsSection from "@/components/news/EventsSection";
import JoinUs from "@/components/home/JoinUs";

export default function NewsPage() {
  return (
    <main>
      <NewsBanner />
      <LatestNews />
      <EventsSection />
      <JoinUs />
    </main>
  );
}
