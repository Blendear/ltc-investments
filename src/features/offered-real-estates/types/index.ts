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

  offerSymbol: `${"APA" | "HOU" | "PRE" | "PLO"}-${number}`; // Symbol oferty, np. "APA-2" - used for finding the translation label for this real estate details page
  area: number; // Powierzchnia, np. "33,00"
  pricePerSquareMeter: number;

  buildingType?: "tenement" | "block"; // Typ budynku, np. "kamienica"
  feesIncludedInRent?:
    | "renovation-fund, water"
    | "renovation-fund, water, heating"
    | "renovation-fund, water, heating, garbage-collection"
    | "renovation-fund, water, heating, garbage-collection, cleaning"; // Opłaty w czynszu, np. "fundusz remontowy, woda"
  feesNotIncludedInRentAndCountedFromLiveUsage?:
    | "electricity"
    | "gas"
    | "water"
    | "heating"
    | "electricity-and-water"
    | "electricity-and-heating"
    | "electricity-and-gas"
    | "water-and-heating"
    | "water-and-gas"
    | "heating-and-gas"
    | "electricity-and-water-and-heating"
    | "electricity-and-water-and-gas"
    | "electricity-and-heating-and-gas"
    | "water-and-heating-and-gas"
    | "electricity-and-water-and-heating-and-gas";
  // Opłaty wg liczników, np. "prąd"
  monthlyAdministrativeRent?: number; // Mies. czynsz admin., np. "320 PLN"
  securityDeposit?: number; // Kaucja zabezp., np. 2000
  depositType?: "one-month" | "one-month" | "two-months"; // Rodzaj kaucji, np. "jednomiesięczna"

  typeOfPremises?: "one-storey" | "multi-storey"; // Typ lokalu, np. "jednopoziomowy"
  floor?: number; // Piętro, np. "parter"
  totalFloorsInBuilding?: number; // Liczba pięter w budynku
  roomCount?: number; // Liczba pokoi, np. 2

  installations?: "new" | "renewed" | "to-renew" | "to-replace" | "to-install"; // Instalacje, np. "wymienione"
  parkingPossible?: "yes" | "no"; // Możliwość parkowania, np. "tak"
  ownParking?: "yes" | "no"; // Własny parking, np. "tak"

  condition?: "need renovation" | "good" | "very good" | "perfect"; // Stan, np. "do remontu"
  windows?: "wooden" | "plastic" | "aluminium"; // Okna, np. "drewniane
  balcony?: "yes" | "no"; // Balkon, np. "brak"
  furniture?: "furnished" | "partly-furnished" | "unfurnished"; // Umeblowanie, np. "w pełni umeblowane"

  accessRoad?: "asphalt" | "dirt" | "concrete"; // Droga dojazdowa, np. "asfaltowa"
  surroundings?: "houses" | "forest" | "lake" | "river" | "mountains"; // Otoczenie, np. "działki zabudowane"
  location?: "city" | "suburbs" | "village" | "countryside"; // Położenie, np. "blisko centrum"

  // Used for 'plots' real estates
  plotDevelopment?: "undeveloped" | "developed"; // Zagosp. działki, np. niezagospodarowana
  plotTopography?: "flat" | "sloping" | "hill"; // Ukształtowanie terenu, np. "płąska"
  plotFencing?: "yes" | "no"; // Ogrodzenie działki
  gas?: "in-street" | "in-building" | "no"; // Gaz, np. "w ulicy"
  water?: "in-street" | "in-building" | "no"; // Woda, np. "w ulicy"
  electricity?: "in-street" | "in-building" | "no"; // Prąd, np. "w ulicy"
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
