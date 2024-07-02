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
  imagePathsList: string[];
  localisation: string;
  roomsAmount?: number;
  squareMeters: number;
  pricePerSquareMeter: number;
};

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
