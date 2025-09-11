import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heros.action";
import { useSearchParams } from "react-router";

export const SearchPage = () => {

  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;


  const {data:heroes=[]} = useQuery({
      queryKey:['search',{name,strength}],
      queryFn: () => searchHeroesAction({name,strength}),
      staleTime: 1000*60*5,
    });
    
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descrube, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumb currentPage="Buscador de héroes"
      // breadcrumbs={[
      //   {label:'Home1',to:'/'},
      //   {label:'Home2',to:'/'},
      //   {label:'Home3',to:'/'},
      // ]}
      />
      {/* Stats DashBoard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />

      <HeroGrid heroes={heroes}/>
    </>
  );
};

export default SearchPage;
