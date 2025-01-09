import NotificationsList from './components/NotificationsList';
// mx-auto p-8 pb-20 sm:p-20
export default function Home() {
  return (
    <div className="bg-background  gap-16  font-[family-name:var(--font-geist-sans)]">
      <NotificationsList />
    </div>
  );
}
