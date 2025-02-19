import { de } from "./de";

export const en = {
  menu: {
    home: "Home",
    aboutUs: "About Us",
    contact: "Contact",
    investments: "Investments",
    offers: "Offers",
  },

  footer: {
    home: "Home",
    aboutUs: "About Us",
    contact: "Contact",
    investments: "Investments",
    offers: "Offers",

    addressStreet: "Al. Jana Pawła II 58 B/7",
    addressCode: "47-232",
    addressCity: "Kędzierzyn-Koźle",
    addressCountry: "Poland",

    phoneLabel: "Tel",
    emailLabel: "Email",
    krsLabel: "KRS",
    nipLabel: "NIP",
    regonLabel: "REGON",
  },

  aboutUs: {
    header: "About us",
    sectionOne: {
      header: "Dynamic real estate development",
      paragraphOne:
        "LTC Investments sp. z o.o. is a dynamically developing company operating in the real estate industry. Our offer includes the rental of commercial premises and apartments, as well as comprehensive property management.",
      paragraphTwo:
        "With passion and commitment, we support our clients in achieving their investment goals, offering professional advice and support at every stage.",
    },
    sectionTwo: {
      header: "Professional investment advice",
      paragraphOne:
        "We specialize in the broadly understood real estate industry, offering the rental of apartments and commercial premises, as well as comprehensive property management.",
      paragraphTwo:
        "LTC Investments sp. z o.o. is a team of experienced specialists who approach investments and investment advice with passion, helping clients achieve maximum benefits from their ventures.",
    },
  },

  contact: {
    header: "Contact us",

    addressStreet: "Al. Jana Pawła II 58 B/7",
    addressCode: "47-232",
    addressCity: "Kędzierzyn-Koźle",
    addressCountry: "Poland",
    krsLabel: "KRS",
    nipLabel: "NIP",
    regonLabel: "REGON",
  },

  home: {
    brandName: "LTC Investments",
    brandSlogan: {
      start: "Your investment, our",
      endings: ["passion", "specialty", "future"],
    },
    infoChunks: {
      first: {
        header: "Real estate rental",
        content:
          "We offer rental of apartments and commercial premises tailored to your needs. Our flexibility and individual approach guarantee satisfaction with the choice of the ideal space.",
      },
      second: {
        header: "Rental management",
        content:
          "Do you own a property that requires constant care? Our comprehensive rental service will provide you with peace of mind and security at every stage.",
      },
      third: {
        header: "Development activity",
        content:
          "We implement development projects that combine modernity with functionality. Our passion for creating unique spaces is visible in every detail.",
      },
      fourth: {
        header: "Real estate sales",
        content:
          "Investing in real estate with us is a guarantee of return and security. Trust our experience and professionalism to make your investments profitable.",
      },
    },
    aboutUsButton: "About Us",
  },

  investments: {
    header: "Investments",
    sectionOne: {
      header: "Advanced projects",
      paragraphOne:
        "We specialize in strategic real estate investments. We carry out projects with high return potential, both in the residential and commercial sectors.",
      paragraphTwo:
        "Our investments are carefully planned and implemented to maximize value for our clients and partners. Each project is analyzed in terms of profitability, location, and growth potential.",
    },
    sectionTwo: {
      header: "Innovative solutions",
      paragraphOne:
        "We implement innovative investment solutions that respond to changing market needs. Our projects are based on the latest trends and technologies in the real estate industry.",
      paragraphTwo:
        "Thanks to the experience and knowledge of our team, we are able to offer investments that not only meet the expectations of our clients but also set new standards in the industry.",
    },
  },

  offers: {
    typesOfRealEstates: {
      apartments: "Apartments",
      houses: "Houses",
      premises: "Premises",
      plots: "Plots",
    },

    header: "Our offers",

    defaultOffersCardsName: {
      apartments: "Apartments for rent",
      houses: "Houses for sale",
      premises: "Premises for rent",
      plots: "Plots for sale",
    },

    detailedDescriptions: {
      headers: {
        characteristics: "Characteristics",
        consultant: "Contact Person",
        about: "About the offer",
        location: "Location",
        additionalInfo: "Additional Information",
      },

      characteristicsKeys: {
        offerSymbol: "Offer Symbol",
        area: "Area",
        buildingType: "Building Type",
        feesIncludedInRent: "Fees Included in Rent",
        feesByMeters: "Fees by Meters",
        rent: "Rent",
        securityDeposit: "Security Deposit",
        depositType: "Deposit Type",
        typeOfPremises: "Type of Premises",
        floor: "Floor",
        totalFloorsInBuilding: "Total Floors in Building",
        roomCount: "Room Count",
        installations: "Installations",
        parkingPossible: "Parking Possible",
        ownParking: "Own Parking",
        condition: "Condition",
        windows: "Windows",
        balcony: "Balcony",
        furniture: "Furniture",
        plotDevelopment: "Plot Development",
        plotTopography: "Plot Topography",
        plotFencing: "Plot Fencing",
        gas: "Gas",
        water: "Water",
        electricity: "Electricity",
        accessRoad: "Access Road",
        surroundings: "Surroundings",
        location: "Location",
      },

      characteristicsValues: {
        buildingType: {
          tenement: "tenement",
          block: "block",
        },
        feesIncludedInRent: {
          "renovation-fund, water": "renovation fund, water",
          "renovation-fund, water, heating": "renovation fund, water, heating",
          "renovation-fund, water, heating, garbage-collection":
            "renovation fund, water, heating, garbage collection",
          "renovation-fund, water, heating, garbage-collection, cleaning":
            "renovation fund, water, heating, garbage collection, cleaning",
        },
        feesNotIncludedInRentAndCountedFromLiveUsage: {
          electricity: "electricity",
          gas: "gas",
          water: "water",
          heating: "heating",
          "electricity-and-water": "electricity and water",
          "electricity-and-heating": "electricity and heating",
          "electricity-and-gas": "electricity and gas",
          "water-and-heating": "water and heating",
          "water-and-gas": "water and gas",
          "heating-and-gas": "heating and gas",
          "electricity-and-water-and-heating": "electricity, water and heating",
          "electricity-and-water-and-gas": "electricity, water and gas",
          "electricity-and-heating-and-gas": "electricity, heating and gas",
          "water-and-heating-and-gas": "water, heating and gas",
          "electricity-and-water-and-heating-and-gas":
            "electricity, water, heating and gas",
        },
        depositType: {
          "one-month": "one-month",
          "two-months": "two-months",
        },
        typeOfPremises: {
          "one-storey": "one-storey",
          "multi-storey": "multi-storey",
        },
        installations: {
          new: "new",
          renewed: "renewed",
          "to-renew": "to renew",
          "to-replace": "to replace",
          "to-install": "to install",
        },
        parkingPossible: {
          yes: "yes",
          no: "no",
        },
        ownParking: {
          yes: "yes",
          no: "no",
        },
        condition: {
          "need renovation": "need renovation",
          good: "good",
          "very good": "very good",
          perfect: "perfect",
        },
        windows: {
          wooden: "wooden",
          plastic: "plastic",
          aluminium: "aluminium",
        },
        balcony: {
          yes: "yes",
          no: "no",
        },
        furniture: {
          furnished: "furnished",
          "partly-furnished": "partly furnished",
          unfurnished: "unfurnished",
        },
        plotDevelopment: {
          undeveloped: "undeveloped",
          developed: "developed",
        },
        plotTopography: {
          flat: "flat",
          sloping: "sloping",
          hill: "hill",
        },
        plotFencing: {
          yes: "yes",
          no: "no",
        },
        gas: {
          "in-street": "in street",
          "in-building": "in building",
          no: "no",
        },
        water: {
          "in-street": "in street",
          "in-building": "in building",
          no: "no",
        },
        electricity: {
          "in-street": "in street",
          "in-building": "in building",
          no: "no",
        },
        accessRoad: {
          asphalt: "asphalt",
          dirt: "dirt",
          concrete: "concrete",
        },
        surroundings: {
          houses: "houses",
          forest: "forest",
          lake: "lake",
          river: "river",
          mountains: "mountains",
        },
        location: {
          city: "city",
          suburbs: "suburbs",
          village: "village",
          countryside: "countryside",
        },
      },

      realEstateSpecificDescriptionsByFamilyAndId: {
        apartments: {
          1: {
            about: "apartments 1 | about about about",
            location: "apartments 1 | location location location",
            additionalInfo:
              "apartments 1 | additionalInfo additionalInfo additionalInfo",
          },

          2: {
            about: "apartments 2 | about about about",
            location: "apartments 2 | location location location",
            additionalInfo:
              "apartments 2 | additionalInfo additionalInfo additionalInfo",
          },

          3: {
            about: "apartments 3 | about about about",
            location: "apartments 3 | location location location",
            additionalInfo:
              "apartments 3 | additionalInfo additionalInfo additionalInfo",
          },
        },

        houses: {
          1: {
            about: "houses 1 | about about about",
            location: "houses 1  | location location location",
            additionalInfo:
              "houses 1  | additionalInfo additionalInfo additionalInfo",
          },
        },
      },
    },
  },
};
