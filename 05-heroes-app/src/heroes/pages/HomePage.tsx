import {
  Heart,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../components/HeroStats";
import { HeroGrid } from "../components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumb } from "@/components/custom/CustomBreadcrumb";

export const HomePage = () => {
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
        <Tabs value="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains">Villains (2)</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Character Grid */}
      <HeroGrid />

        {/* Pagination */}
        <CustomPagination totalPages={8}/>
      </>
    </>
  );
};
