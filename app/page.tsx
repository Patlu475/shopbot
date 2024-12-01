import { ShoppingAssistant } from "@/components/shopping-assistant";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-5xl">
        <ShoppingAssistant />
      </div>
    </main>
  );
}