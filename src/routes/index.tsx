import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="bg-gray-100 w-screen h-screen flex items-center justify-center">
      Hello WOrld
    </div>
  );
}
