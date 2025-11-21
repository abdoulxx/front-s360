import { useState } from 'react';
import { Search, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ControleS360Page() {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleReset = () => {
    setSelectedOption('');
    setSearchValue('');
  };

  const handleSearch = () => {
    console.log('Recherche:', { selectedOption, searchValue });
    // TODO: Implémenter la logique de recherche
  };

  return (
    <div className="grid grid-cols-[350px_1fr] grid-rows-[auto_1fr] gap-6 h-full overflow-x-hidden">
      {/* Recherche simple - Row 1, Col 1 */}
      <div className="bg-[#6B63C5] rounded-lg overflow-hidden flex flex-col row-start-1">
          <div className="bg-[#5B55B0] px-6 py-4">
            <h2 className="text-white font-semibold text-lg">RECHERCHE AVANCEE</h2>
          </div>
          <div className="bg-white p-6 space-y-6">
            {/* Options */}
            <div className="space-y-2">
              <label className="font-semibold text-gray-900">Options</label>
              <Select value={selectedOption} onValueChange={setSelectedOption}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fdi">FDI</SelectItem>
                  <SelectItem value="rfcv">RFCV</SelectItem>
                  <SelectItem value="declaration">Declaration</SelectItem>
                  <SelectItem value="manifeste TT">Manifeste TT</SelectItem>
                  <SelectItem value="AC">AC</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Valeurs */}
            <div className="space-y-2">
              <label className="font-semibold text-gray-900">Valeurs</label>
              <Input
                type="text"
                placeholder="Entrer valeur..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Boutons */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="flex-1"
              >
                Reset
              </Button>
              <Button
                type="button"
                onClick={handleSearch}
                className="flex-1 bg-[#6B63C5] hover:bg-[#5B55B0] text-white"
              >
                <Search className="w-4 h-4 mr-2" />
                Recherche
              </Button>
            </div>
          </div>
        </div>

      {/* Carte info du haut - Row 1, Col 2 */}
      <div className="bg-gray-200 rounded-lg p-12 flex flex-col items-center justify-center text-center row-start-1 col-start-2">
        <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
          <Network className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Effectuer une recherche
        </h3>
        <p className="text-gray-600">
          Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
        </p>
      </div>

      {/* Recherche avancée (deuxième carte) - Row 2, Col 1 */}
      <div className="bg-[#6B63C5] rounded-lg overflow-hidden flex flex-col row-start-2 col-start-1 self-start">
        <div className="bg-[#5B55B0] px-6 py-4">
          <h2 className="text-white font-semibold text-lg">RECHERCHE AVANCEE</h2>
        </div>
        <div className="bg-white p-6 space-y-6">
            {/* Options */}
          <div className="space-y-2"> 
              <label className="font-semibold text-gray-900">Options</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Importateur">Importateur</SelectItem>
                  <SelectItem value="manifeste">Manifeste</SelectItem>
                  <SelectItem value="annee">ANNEE</SelectItem>
                  <SelectItem value="Declarant">Declarant</SelectItem>
                  <SelectItem value="BUREAU DE PORT">Bureau de port</SelectItem>
                  <SelectItem value="PAYS EXPORTATEUR">Pays exportateur</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Valeurs */}
            <div className="space-y-2">
              <label className="font-semibold text-gray-900">Valeurs</label>
              <Input type="text" placeholder="Entrer valeur..." className="w-full" />
            </div>

            {/* Boutons */}
            <div className="flex gap-3">
              <Button type="button" variant="outline" className="flex-1">
                Reset
              </Button>
              <Button
                type="button"
                className="flex-1 bg-[#6B63C5] hover:bg-[#5B55B0] text-white"
              >
                <Search className="w-4 h-4 mr-2" />
                Recherche
              </Button>
            </div>
          </div>
        </div>

      {/* Tabs avec résultats - Row 2, Col 2 */}
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 flex flex-col row-start-2 col-start-2">
          <Tabs defaultValue="fdi-general" className="w-full">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-[#6B63C5]/30 [&::-webkit-scrollbar-thumb]:bg-[#5B55B0] [&::-webkit-scrollbar-thumb]:rounded-full">
              <TabsList className="w-max justify-start bg-[#6B63C5] rounded-none h-auto p-0 inline-flex">
              <TabsTrigger
                value="fdi-general"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                FDI GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="fdi-article"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                FDI ARTICLE
              </TabsTrigger>
              <TabsTrigger
                value="rfcv-general"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                RFCV GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="rfcv-article"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                RFCV ARTICLE
              </TabsTrigger>
              <TabsTrigger
                value="manifeste-general"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                MANIFESTE GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="manifeste-tt"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                MANIFESTE TT
              </TabsTrigger>
              <TabsTrigger
                value="manifeste-tc"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                MANIFESTE TC
              </TabsTrigger>
              <TabsTrigger
                value="declaration-general"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                DECLARATION GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="declaration-article"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                DECLARATION ARTICLE
              </TabsTrigger>
              <TabsTrigger
                value="declaration-conteneur"
                className="data-[state=active]:bg-white data-[state=active]:text-black text-white rounded-none px-6 py-3"
              >
                DECLARATION CONTENEUR
              </TabsTrigger>
            </TabsList>
            </div>

            <TabsContent value="fdi-general" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="fdi-article" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="rfcv-general" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="rfcv-article" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="manifeste-general" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="manifeste-tt" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="manifeste-tc" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="declaration-general" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="declaration-article" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="declaration-conteneur" className="p-12">
              <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#6B63C5] rounded-full flex items-center justify-center mb-6">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Effectuer une recherche
                </h3>
                <p className="text-gray-600">
                  Sélectionnez un élément dans la liste à gauche pour consulter ses détails.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
    </div>
  );
}
