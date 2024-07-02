import { OfferedRealEstatesType } from "../types";

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
      location: "Imperium Kędzierzyńskie, ul. Szefa 1",
      squareMeters: 100,
      pricePerSquareMeter: 1000,
      detailedDescriptions: {
        characteristics: {
          area: "33,00 m²",
          buildingType: "tenement",
        },
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      name: "Pałac Bizantyjski",
      location: "Imperium Kędzierzyńskie, ul. Szefa 2",
      squareMeters: 100,
      pricePerSquareMeter: 1000,
      detailedDescriptions: {
        characteristics: {},
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
    {
      id: 3,
      consultant: "lukas",
      imagePathsList: [
        "https://www.dsa-arch.com/wp-content/uploads/2021/08/PALACE-DOWNTOWN-LANDSCAPE-1.jpeg",
      ],
      name: "Pałac Bizantyjski",
      location: "Imperium Kędzierzyńskie, ul. Szefa 3",
      squareMeters: 100,
      pricePerSquareMeter: 1000,
      detailedDescriptions: {
        characteristics: {},
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      location: "Śródziemie, ul. Mordoru 7",
      squareMeters: 77,
      pricePerSquareMeter: 777,
      detailedDescriptions: {
        characteristics: {},
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
  ],
  premises: [],
  plots: [],
};
