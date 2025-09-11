import { getHero } from "@/heroes/actions/get-hero.action";
import { useQuery } from "@tanstack/react-query"

export const useGetHero = (idSlug:string) => {

      return useQuery({
      queryKey:['heroes',idSlug],
      queryFn: () => getHero(idSlug),
      staleTime: 1000*60*5,
      retry: false,
    });
}