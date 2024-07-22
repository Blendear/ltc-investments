export type OfferedRealEstatesType = {
  apartments: RealEstateType[];
  houses: RealEstateType[];
  premises: RealEstateType[];
  plots: RealEstateType[];
};

export type TypeOfRealEstate = keyof OfferedRealEstatesType;

export type RealEstateType = {
  id: number;
  name: string;
  consultant: ConsultantType;
  imagePathsList: string[];
  detailedDescriptions: {
    characteristics: CharacteristicsType;
    about: string;
    location: string;
    additionalInfo?: string;
    // priceSpecification?: string;
  };
};

export type CharacteristicsType = {
  // Use english strings, since they are used as translation labels

  offerSymbol?: `${"APA" | "HOU" | "PRE" | "PLO"}-${number}`; // Symbol oferty, np. "APA-2" - used for finding the translation label for this real estate details page
  area?: number; // Powierzchnia, np. "33,00"
  pricePerSquareMeter: number;

  buildingType?: "tenement" | "block"; // Typ budynku, np. "kamienica"
  feesIncludedInRent?: string; // Opłaty w czynszu, np. "fundusz remontowy, woda"
  feesByMeters?: string; // Opłaty wg liczników, np. "prąd"
  monthlyAdministrativeRent?: string; // Mies. czynsz admin., np. "320 PLN"
  securityDeposit?: number; // Kaucja zabezp., np. 2000
  depositType?: "one-month" | "one-month" | "two-months"; // Rodzaj kaucji, np. "jednomiesięczna"

  typeOfPremises?: "one-storey" | "multi-storey"; // Typ lokalu, np. "jednopoziomowy"
  floor?: number; // Piętro, np. "parter"
  totalFloorsInBuilding?: number; // Liczba pięter w budynku
  roomCount?: number; // Liczba pokoi, np. 2

  installations?: string; // Instalacje, np. "wymienione"
  parkingPossible?: "yes" | "no"; // Możliwość parkowania, np. "tak"
  ownParking?: "yes" | "no"; // Własny parking, np. "tak"

  condition?: "need renovation" | "good" | "very good" | "perfect"; // Stan, np. "do remontu"
  windows?: "wooden" | "plastic" | "aluminium"; // Okna, np. "drewniane
  balcony?: "yes" | "no"; // Balkon, np. "brak"
  furniture?: "furnished" | "partly-furnished" | "unfurnished"; // Umeblowanie, np. "w pełni umeblowane"

  plotDevelopment?: "undeveloped" | "developed"; // Zagosp. działki, np. niezagospodarowana
  plotTopography?: "flat" | "sloping" | "hill"; // Ukształtowanie terenu, np. "płąska"
  plotFencing?: "yes" | "no"; // Ogrodzenie działki

  gas?: string; // Gaz, np. "w ulicy"
  water?: string; // Woda, np. "w ulicy"
  electricity?: string; // Prąd, np. "w ulicy"

  accessRoad?: "asphalt" | "dirt" | "concrete"; // Droga dojazdowa, np. "asfaltowa"
  surroundings?: "houses" | "forest" | "lake" | "river" | "mountains"; // Otoczenie, np. "działki zabudowane"
  location?: "city" | "suburbs" | "village" | "countryside"; // Położenie, np. "blisko centrum"
};

export type ConsultantType = "lukas";

export type TilesWithSummaryListProps = {
  tilesList: TileWithSummaryProps[];
};

export type TileWithSummaryProps = {
  tile: TileType;
};

export type TileType = {
  variant: "summary-short" | "details-long";
  details: RealEstateType;
};

export type GalleryProps = { imagesPathsList: string[] };
