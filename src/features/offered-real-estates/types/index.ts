export type OfferedRealEstatesType = {
  apartments: RealEstateType[];
  houses: RealEstateType[];
  premises: RealEstateType[];
  plots: RealEstateType[];
};

export type TypeOfRealEstate = keyof OfferedRealEstatesType;

export type RealEstateType = {
  id: number;
  realEstateFamily: "apartments" | "houses" | "premises" | "plots";
  name: string;
  consultant: ConsultantNameType;
  imagePathsList: string[];
  crossSectionImagePath: string;
  detailedDescriptions: {
    characteristics: CharacteristicsType;
    about: string;
    location: string;
    additionalInfo?: string;
    // priceSpecification?: string;
  };
};

export type CharacteristicsType = {
  // Values are english strings, since they are used as translation labels that are rendered as the value

  area: number;
  pricePerSquareMeter: number;

  buildingType?: "tenement" | "block";
  feesIncludedInRent?:
    | "renovation-fund, water"
    | "renovation-fund, water, heating"
    | "renovation-fund, water, heating, garbage-collection"
    | "renovation-fund, water, heating, garbage-collection, cleaning";
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
  monthlyAdministrativeRent?: number;
  securityDeposit?: number;
  depositType?: "one-month" | "one-month" | "two-months";

  typeOfPremises?: "one-storey" | "multi-storey";
  floor?: number;
  totalFloorsInBuilding?: number;
  roomCount?: number;

  installations?: "new" | "renewed" | "to-renew" | "to-replace" | "to-install";
  parkingPossible?: "yes" | "no";
  ownParking?: "yes" | "no";

  condition?: "need renovation" | "good" | "very good" | "perfect";
  windows?: "wooden" | "plastic" | "aluminium";
  balcony?: "yes" | "no";
  furniture?: "furnished" | "partly-furnished" | "unfurnished";

  accessRoad?: "asphalt" | "dirt" | "concrete";
  surroundings?: "houses" | "forest" | "lake" | "river" | "mountains";
  location?: "city" | "suburbs" | "village" | "countryside";

  // Used for 'plots' real estates
  plotDevelopment?: "undeveloped" | "developed";
  plotTopography?: "flat" | "sloping" | "hill";
  plotFencing?: "yes" | "no";
  gas?: "in-street" | "in-building" | "no";
  water?: "in-street" | "in-building" | "no";
  electricity?: "in-street" | "in-building" | "no";
};

export type ConsultantNameType = "lukas";

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

export type ConsultantVisualizerProps = {
  consultant: ConsultantType;
};

export type ConsultantType = {
  name: ConsultantNameType;
  surname: string;
  imagePath: string;
  phoneNumber: string;
  email: string;
};
