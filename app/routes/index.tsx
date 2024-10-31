import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import container from "lib";

const addOnServer = createServerFn(
  "GET",
  ({ left, right }: { left: number; right: number }) => {
    const service = container.resolve("service");
    return service.add(left, right);
  },
);

export const Route = createFileRoute("/")({
  component: Home,
  beforeLoad: async () => {
    const result = await addOnServer({ left: 1, right: 2 });

    console.log("==============================");
    console.log(result);
    console.log("==============================");
  },
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
    </div>
  );
}
