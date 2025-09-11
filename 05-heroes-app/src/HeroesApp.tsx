import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FavouriteHeroProvider } from "./heroes/context/FavouriteHeroContext";

const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavouriteHeroProvider>
      <RouterProvider router={appRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
      </FavouriteHeroProvider>
    </QueryClientProvider>
  );
};
