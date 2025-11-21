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
import { FlowDiagram } from '@/components/flow/FlowDiagram';
import { NodeDetailsModal } from '@/components/flow/NodeDetailsModal';
import { DataTable } from '@/components/table/DataTable';
import type { Column } from '@/components/table/DataTable';
import type { FlowDiagramData, FlowNodeData } from '@/types/flow.types';

// Colonnes pour FDI GENERAL
const FDI_GENERAL_COLUMNS: Column[] = [
  { key: 'id', label: '#', sortable: true },
  { key: 'annee', label: 'ANNEE', sortable: true },
  { key: 'bureau', label: 'BUREAU', sortable: true },
  { key: 'serie_fdi', label: 'SERIE FDI', sortable: true },
  { key: 'numeros_fdi', label: 'NUMEROS FDI', sortable: true },
  { key: 'date_fdi', label: 'DATE FDI', sortable: true },
  { key: 'pays_fournisseur', label: 'PAYS FOURNISSEUR', sortable: true },
  { key: 'importateur', label: 'IMPORTATEUR', sortable: true },
];

export default function ControleS360Page() {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [searchValue2, setSearchValue2] = useState('');
  const [flowData, setFlowData] = useState<FlowDiagramData | null>(null);
  const [selectedNode, setSelectedNode] = useState<FlowNodeData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState<Record<string, any>[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<string | number | null>(null);

  const handleReset = () => {
    setSelectedOption('');
    setSearchValue('');
    setFlowData(null);
    setTableData([]);
    setSelectedRowId(null);
  };

  const handleReset2 = () => {
    setSelectedOption2('');
    setSearchValue2('');
    setFlowData(null);
    setTableData([]);
    setSelectedRowId(null);
  };

  const handleSearch = () => {
    console.log('Recherche:', { selectedOption, searchValue });

    // TODO: a Remplacer par un appel API pour les details
    // Mock data pour le tableau
    const mockTableData = [
      {
        id: 1,
        annee: '2024',
        bureau: 'CIAB1',
        serie_fdi: 'A',
        numeros_fdi: 'FDI002',
        date_fdi: '22-03-2024',
        pays_fournisseur: 'KAZAKHASTAN',
        importateur: 'ALEXANDRE',
      },
    ];

    setTableData(mockTableData);
    setSelectedRowId(1); // Sélectionner la première ligne par défaut

    const mockData: FlowDiagramData = {
      nodes: [
        {
          id: 'AC1',
          label: 'AC',
          status: 'completed',
          details: {
            numero: 'AC-2024-001',
            date: '15/01/2024',
            statut: 'Validé',
            annee: '2024',
            serie: 'A',
            Numfdi: 'FDI12020',
            Date_fdi: '16/01/2024', 
            Declarant: 'alexandre',
            nom_importateur: 'sidy',
            code: 'IMP12345',
            adresse: 'BP Abidjan 01',
            nom_fournissseur: 'Fournisseur chine',
            telephone: '+225 0707070707',
            pays: 'Chine',
            banque: 'BNI',
            pays_exportateur: 'Chine',
            bureau_de_port: 'Port de Marseille',
          },
        },
        {
          id: 'FDI',
          label: 'FDI',
          status: 'current',
          details: {
            numero: searchValue || 'FDI12020',
            date: '16/01/2024',
            importateur: 'Société XYZ',
          },
        },
        {
          id: 'RFCV',
          label: 'RFCV',
          status: 'pending',
          details: {
            numero: 'RFCV-2024-003',
            statut: 'En attente',
          },
        },
        {
          id: 'Manifeste',
          label: 'Manifeste',
          status: 'pending',
          details: {
            numero: 'MAN-2024-004',
            statut: 'En attente',
          },
        },
        {
          id: 'Declaration',
          label: 'Déclaration',
          status: 'error',
          details: {
            numero: 'DEC-2024-005',
            statut: 'Erreur de validation',
            erreur: 'Document manquant',
          },
        },
        {
          id: 'AC2',
          label: 'AC',
          status: 'pending',
          details: {
            numero: 'AC-2024-006',
            statut: 'En attente',
          },
        },
      ],
      documentInfo: {
        type: selectedOption,
        value: searchValue,
      },
    };

    setFlowData(mockData);
  };

  const handleNodeClick = (nodeId: string) => {
    const node = flowData?.nodes.find((n) => n.id === nodeId);
    if (node) {
      setSelectedNode(node);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNode(null);
  };

  const handleSearch2 = () => {
    console.log('Recherche 2:', { selectedOption2, searchValue2 });

    // TODO: Remplacer par un appel API
    // Mock data pour la recherche du bas (plusieurs lignes)
    const mockTableData = [
      {
        id: 1,
        annee: '2024',
        bureau: 'CIAB1',
        serie_fdi: 'A',
        numeros_fdi: 'FDI002',
        date_fdi: '22-03-2024',
        pays_fournisseur: 'KAZAKHASTAN',
        importateur: 'ALEXANDRE',
      },
      {
        id: 2,
        annee: '2024',
        bureau: 'CIAB1',
        serie_fdi: 'A',
        numeros_fdi: 'FDI003',
        date_fdi: '25-12-2025',
        pays_fournisseur: 'KAZAKHASTAN',
        importateur: 'ALEXANDRE',
      },
      {
        id: 3,
        annee: '2024',
        bureau: 'CIAB1',
        serie_fdi: 'A',
        numeros_fdi: 'FDI004',
        date_fdi: '12-05-2024',
        pays_fournisseur: 'KAZAKHASTAN',
        importateur: 'ALEXANDRE',
      },
      {
        id: 4,
        annee: '2024',
        bureau: 'CIAB1',
        serie_fdi: 'A',
        numeros_fdi: 'FDI005',
        date_fdi: '25-10-2025',
        pays_fournisseur: 'KAZAKHASTAN',
        importateur: 'ALEXANDRE',
      },
    ];

    setTableData(mockTableData);

    // Sélectionner la première ligne et afficher son diagramme
    if (mockTableData.length > 0) {
      const firstRow = mockTableData[0];
      setSelectedRowId(firstRow.id);
      updateDiagramFromRow(firstRow);
    }
  };

  const updateDiagramFromRow = (row: Record<string, any>) => {
    // Générer les données du diagramme basées sur la ligne sélectionnée
    const mockData: FlowDiagramData = {
      nodes: [
        {
          id: 'AC1',
          label: 'AC',
          status: 'completed',
          details: {
            numero: 'AC-2024-001',
            date: '15/01/2024',
            statut: 'Validé',
            annee: row.annee || '2024',
            serie: row.serie_fdi || 'A',
            Numfdi: row.numeros_fdi || 'FDI002',
            Date_fdi: row.date_fdi || '16/01/2024',
            Declarant: 'alexandre',
            nom_importateur: row.importateur || 'sidy',
            code: 'IMP12345',
            adresse: 'BP Abidjan 01',
            nom_fournissseur: 'Fournisseur chine',
            telephone: '+225 0707070707',
            pays: row.pays_fournisseur || 'Chine',
            banque: 'BNI',
            pays_exportateur: row.pays_fournisseur || 'Chine',
            bureau_de_port: row.bureau || 'Port de Marseille',
          },
        },
        {
          id: 'FDI',
          label: 'FDI',
          status: 'current',
          details: {
            numero: row.numeros_fdi || 'FDI12020',
            date: row.date_fdi || '16/01/2024',
            importateur: row.importateur || 'Société XYZ',
          },
        },
        {
          id: 'RFCV',
          label: 'RFCV',
          status: 'pending',
          details: {
            numero: 'RFCV-2024-003',
            statut: 'En attente',
          },
        },
        {
          id: 'Manifeste',
          label: 'Manifeste',
          status: 'pending',
          details: {
            numero: 'MAN-2024-004',
            statut: 'En attente',
          },
        },
        {
          id: 'Declaration',
          label: 'Déclaration',
          status: 'error',
          details: {
            numero: 'DEC-2024-005',
            statut: 'Erreur de validation',
            erreur: 'Document manquant',
          },
        },
        {
          id: 'AC2',
          label: 'AC',
          status: 'pending',
          details: {
            numero: 'AC-2024-006',
            statut: 'En attente',
          },
        },
      ],
      documentInfo: {
        type: selectedOption2 || selectedOption,
        value: row.numeros_fdi || searchValue,
      },
    };

    setFlowData(mockData);
  };

  const handleRowClick = (row: Record<string, any>) => {
    setSelectedRowId(row.id);
    updateDiagramFromRow(row);
    console.log('Ligne sélectionnée:', row);
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

      {/* Carte info du haut / Diagramme - Row 1, Col 2 */}
      <div className="bg-gray-200 rounded-lg overflow-hidden row-start-1 col-start-2">
        {flowData ? (
          <div className="w-full h-full min-h-[300px]">
            <FlowDiagram data={flowData} onNodeClick={handleNodeClick} />
          </div>
        ) : (
          <div className="p-12 flex flex-col items-center justify-center text-center h-full">
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
        )}
      </div>

      {/* Modal pour afficher les détails du nœud */}
      <NodeDetailsModal
        node={selectedNode}
        open={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Recherche avancée (deuxième carte) - Row 2, Col 1 */}
      <div className="bg-[#6B63C5] rounded-lg overflow-hidden flex flex-col row-start-2 col-start-1 self-start">
        <div className="bg-[#5B55B0] px-6 py-4">
          <h2 className="text-white font-semibold text-lg">RECHERCHE AVANCEE</h2>
        </div>
        <div className="bg-white p-6 space-y-6">
            {/* Options */}
          <div className="space-y-2">
              <label className="font-semibold text-gray-900">Options</label>
              <Select value={selectedOption2} onValueChange={setSelectedOption2}>
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
              <Input
                type="text"
                placeholder="Entrer valeur..."
                value={searchValue2}
                onChange={(e) => setSearchValue2(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Boutons */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset2}
                className="flex-1"
              >
                Reset
              </Button>
              <Button
                type="button"
                onClick={handleSearch2}
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
              <TabsList className="w-max justify-start bg-[#6B63C5] rounded-none h-auto p-0 inline-flex gap-1 px-2 pt-2">
              <TabsTrigger
                value="fdi-general"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                FDI GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="fdi-article"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                FDI ARTICLE
              </TabsTrigger>
              <TabsTrigger
                value="rfcv-general"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                RFCV GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="rfcv-article"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                RFCV ARTICLE
              </TabsTrigger>
              <TabsTrigger
                value="manifeste-general"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                MANIFESTE GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="manifeste-tt"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                MANIFESTE TT
              </TabsTrigger>
              <TabsTrigger
                value="manifeste-tc"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                MANIFESTE TC
              </TabsTrigger>
              <TabsTrigger
                value="declaration-general"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                DECLARATION GENERAL
              </TabsTrigger>
              <TabsTrigger
                value="declaration-article"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                DECLARATION ARTICLE
              </TabsTrigger>
              <TabsTrigger
                value="declaration-conteneur"
                className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-gray-300 data-[state=inactive]:bg-[#6B63C5]/70 text-white rounded-t-lg px-6 py-3 border-b-0 relative data-[state=active]:shadow-sm"
              >
                DECLARATION CONTENEUR
              </TabsTrigger>
            </TabsList>
            </div>

            <TabsContent value="fdi-general" className="p-6">
              {tableData.length > 0 ? (
                <DataTable
                  columns={FDI_GENERAL_COLUMNS}
                  data={tableData}
                  onRowClick={handleRowClick}
                  selectedRowId={selectedRowId}
                />
              ) : (
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
              )}
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
