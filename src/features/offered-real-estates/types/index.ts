export type OfferedRealEstatesType = {
  apartments: RealEstateType[];
  houses: RealEstateType[];
  premises: RealEstateType[];
  plots: RealEstateType[];
};

export type RealEstateType = {
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
