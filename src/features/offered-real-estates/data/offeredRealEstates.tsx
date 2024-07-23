import { OfferedRealEstatesType } from "../types";

//
// export type CharacteristicsType = {
//   // Use english strings, since they are used as translation labels

//   offerSymbol: `${"APA" | "HOU" | "PRE" | "PLO"}-${number}`; // Symbol oferty, np. "APA-2" - used for finding the translation label for this real estate details page
//   area: number; // Powierzchnia, np. "33,00"
//   pricePerSquareMeter: number;

//   buildingType?: "tenement" | "block"; // Typ budynku, np. "kamienica"
//   feesIncludedInRent?: string; // Opłaty w czynszu, np. "fundusz remontowy, woda"
//   feesByMeters?: string; // Opłaty wg liczników, np. "prąd"
//   monthlyAdministrativeRent?: string; // Mies. czynsz admin., np. "320 PLN"
//   securityDeposit?: number; // Kaucja zabezp., np. 2000
//   depositType?: "one-month" | "one-month" | "two-months"; // Rodzaj kaucji, np. "jednomiesięczna"

//   typeOfPremises?: "one-storey" | "multi-storey"; // Typ lokalu, np. "jednopoziomowy"
//   floor?: number; // Piętro, np. "parter"
//   totalFloorsInBuilding?: number; // Liczba pięter w budynku
//   roomCount?: number; // Liczba pokoi, np. 2

//   installations?: string; // Instalacje, np. "wymienione"
//   parkingPossible?: "yes" | "no"; // Możliwość parkowania, np. "tak"
//   ownParking?: "yes" | "no"; // Własny parking, np. "tak"

//   condition?: "need renovation" | "good" | "very good" | "perfect"; // Stan, np. "do remontu"
//   windows?: "wooden" | "plastic" | "aluminium"; // Okna, np. "drewniane
//   balcony?: "yes" | "no"; // Balkon, np. "brak"
//   furniture?: "furnished" | "partly-furnished" | "unfurnished"; // Umeblowanie, np. "w pełni umeblowane"

//   plotDevelopment?: "undeveloped" | "developed"; // Zagosp. działki, np. niezagospodarowana
//   plotTopography?: "flat" | "sloping" | "hill"; // Ukształtowanie terenu, np. "płąska"
//   plotFencing?: "yes" | "no"; // Ogrodzenie działki

//   gas?: string; // Gaz, np. "w ulicy"
//   water?: string; // Woda, np. "w ulicy"
//   electricity?: string; // Prąd, np. "w ulicy"

//   accessRoad?: "asphalt" | "dirt" | "concrete"; // Droga dojazdowa, np. "asfaltowa"
//   surroundings?: "houses" | "forest" | "lake" | "river" | "mountains"; // Otoczenie, np. "działki zabudowane"
//   location?: "city" | "suburbs" | "village" | "countryside"; // Położenie, np. "blisko centrum"
// };
export const offeredRealEstates: OfferedRealEstatesType = {
  apartments: [
    {
      id: 1,
      consultant: "lukas",
      imagePathsList: [
        "https://www.dsa-arch.com/wp-content/uploads/2021/08/PALACE-DOWNTOWN-LANDSCAPE-1.jpeg",
        "https://www.dsa-arch.com/wp-content/uploads/2021/08/PALACE-DOWNTOWN-LANDSCAPE-1.jpeg",
        "https://www.dsa-arch.com/wp-content/uploads/2021/08/PALACE-DOWNTOWN-LANDSCAPE-1.jpeg",
        "https://www.dsa-arch.com/wp-content/uploads/2021/08/PALACE-DOWNTOWN-LANDSCAPE-1.jpeg",
        "https://www.dsa-arch.com/wp-content/uploads/2021/08/PALACE-DOWNTOWN-LANDSCAPE-1.jpeg",
      ],
      name: "Pałac Bizantyjski",
      detailedDescriptions: {
        characteristics: {
          offerSymbol: "APA-1",
          area: 33.0,
          pricePerSquareMeter: 5000,
          buildingType: "tenement",
          feesIncludedInRent:
            "renovation-fund, water, heating, garbage-collection, cleaning",
          feesNotIncludedInRentAndCountedFromLiveUsage: "heating-and-gas",
          monthlyAdministrativeRent: 500,
          securityDeposit: 2000,
          depositType: "one-month",
          typeOfPremises: "one-storey",
          floor: 1,
          totalFloorsInBuilding: 2,
          roomCount: 2,
          installations: "to-replace",
          parkingPossible: "yes",
          ownParking: "yes",
          condition: "need renovation",
          windows: "wooden",
          balcony: "yes",
          furniture: "furnished",
          plotDevelopment: "undeveloped",
          plotTopography: "flat",
          plotFencing: "yes",
          accessRoad: "asphalt",
          surroundings: "houses",
          location: "city",
        },
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "Imperium Kędzierzyńskie, ul. Lorda 1",
        additionalInfo:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
    {
      id: 2,
      consultant: "lukas",
      imagePathsList: [
        "https://www.dsa-arch.com/wp-content/uploads/2021/08/PALACE-DOWNTOWN-LANDSCAPE-1.jpeg",
      ],
      name: "Bajorko Shreka",
      detailedDescriptions: {
        characteristics: {
          offerSymbol: "APA-2",
          area: 33.0,
          pricePerSquareMeter: 5000,
          buildingType: "tenement",
          feesIncludedInRent: "renovation-fund, water",
          feesNotIncludedInRentAndCountedFromLiveUsage: "heating",
          monthlyAdministrativeRent: 20,
          securityDeposit: 2000,
          depositType: "one-month",
          typeOfPremises: "one-storey",
          floor: 1,
          totalFloorsInBuilding: 2,
          roomCount: 2,
          installations: "to-renew",
          parkingPossible: "yes",
          ownParking: "yes",
          condition: "need renovation",
          windows: "wooden",
          balcony: "yes",
          furniture: "furnished",
          plotDevelopment: "undeveloped",
          plotTopography: "flat",
          plotFencing: "yes",
          accessRoad: "asphalt",
          surroundings: "houses",
          location: "city",
        },
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "Imperium Kędzierzyńskie, ul. Pazia 2",
      },
    },
    {
      id: 3,
      consultant: "lukas",
      imagePathsList: [
        "https://www.dsa-arch.com/wp-content/uploads/2021/08/PALACE-DOWNTOWN-LANDSCAPE-1.jpeg",
      ],
      name: "Hata Pirata",
      detailedDescriptions: {
        characteristics: {
          offerSymbol: "APA-3",
          area: 33.0,
          pricePerSquareMeter: 5000,
          buildingType: "tenement",
          feesIncludedInRent:
            "renovation-fund, water, heating, garbage-collection",
          feesNotIncludedInRentAndCountedFromLiveUsage: "electricity",
          monthlyAdministrativeRent: 320,
          securityDeposit: 2000,
          depositType: "one-month",
          typeOfPremises: "one-storey",
          floor: 1,
          totalFloorsInBuilding: 2,
          roomCount: 2,
          installations: "to-renew",
          parkingPossible: "yes",
          ownParking: "yes",
          condition: "need renovation",
          windows: "wooden",
          balcony: "yes",
          furniture: "furnished",
          plotDevelopment: "undeveloped",
          plotTopography: "flat",
          plotFencing: "yes",
          accessRoad: "asphalt",
          surroundings: "houses",
          location: "city",
        },
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "Imperium Kędzierzyńskie, ul. Szefa 3",
      },
    },
  ],
  houses: [
    {
      id: 1,
      consultant: "lukas",
      imagePathsList: [
        "https://static.wikia.nocookie.net/lugaresesdla/images/c/cf/34397_1216345233135_454_300.jpg/revision/latest?cb=20180329115746&path-prefix=es",
        "https://static.wikia.nocookie.net/lugaresesdla/images/c/cf/34397_1216345233135_454_300.jpg/revision/latest?cb=20180329115746&path-prefix=es",
        "https://static.wikia.nocookie.net/lugaresesdla/images/c/cf/34397_1216345233135_454_300.jpg/revision/latest?cb=20180329115746&path-prefix=es",
      ],
      name: "Gondor",
      detailedDescriptions: {
        characteristics: {
          offerSymbol: "HOU-1",
          area: 33.0,
          pricePerSquareMeter: 5000,
          buildingType: "tenement",
          feesIncludedInRent: "renovation-fund, water",
          feesNotIncludedInRentAndCountedFromLiveUsage: "electricity",
          monthlyAdministrativeRent: 3,
          securityDeposit: 2000,
          depositType: "one-month",
          typeOfPremises: "one-storey",
          floor: 1,
          totalFloorsInBuilding: 2,
          roomCount: 2,
          installations: "new",
          parkingPossible: "yes",
          ownParking: "yes",
          condition: "need renovation",
          windows: "wooden",
          balcony: "yes",
          furniture: "furnished",
          plotDevelopment: "undeveloped",
          plotTopography: "flat",
          plotFencing: "yes",
          gas: "in-street",
          accessRoad: "asphalt",
          surroundings: "houses",
          location: "city",
        },
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "Śródziemie, ul. Mordoru 7",
      },
    },
  ],
  premises: [],
  plots: [],
};
