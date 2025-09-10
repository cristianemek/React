import {
  Heart,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../components/HeroStats";
import { HeroGrid } from "../components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";
// import { useEffect } from "react";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<
    'all' | 'favorites' | 'heroes' | 'villains'
  >('all');

  // useEffect(() => {
  //   getHeroesByPage().then()
  // }, [])
  

  const {data:heroesResponse} = useQuery({
    queryKey:['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000*60*5,
  });

  console.log({heroesResponse})

  return (
    <>
      <>
        {/* Header */}
       <CustomJumbotron 
        title="Universo de SuperHéroes"
        description="Descrube, explora y administra super héroes y villanos"
       />

       <CustomBreadcrumb currentPage="Super Héroes"/>

        {/* Stats Dashboard */}
        <HeroStats />

         {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab('favorites')}
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab('villains')}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid heroes={[]}/>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>Favoritos!!!</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los héroes */}
            <h1>Héroes</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los Villanos */}
            <h1>Villanos</h1>
            <HeroGrid heroes={[]}/>
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
      <HeroGrid heroes={heroesResponse?.heroes ?? []}/>

        {/* Pagination */}
        <CustomPagination totalPages={8}/>
      </>
    </>
  );
};
