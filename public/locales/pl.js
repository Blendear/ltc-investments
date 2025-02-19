import { off } from "process";

export const pl = {
  menu: {
    home: "Strona Główna",
    aboutUs: "O nas",
    contact: "Kontakt",
    investments: "Inwestycje",
    offers: "Oferty",
  },

  footer: {
    home: "Strona Główna",
    aboutUs: "O nas",
    contact: "Kontakt",
    investments: "Inwestycje",
    offers: "Oferty",

    addressStreet: "Al. Jana Pawła II 58 B/7",
    addressCode: "47-232",
    addressCity: "Kędzierzyn-Koźle",
    addressCountry: "Polska",

    phoneLabel: "Tel",
    emailLabel: "Email",
    krsLabel: "KRS",
    nipLabel: "NIP",
    regonLabel: "REGON",
  },

  aboutUs: {
    header: "O nas",
    sectionOne: {
      header: "Dynamiczny rozwój nieruchomości",
      paragraphOne:
        "LTC Investments sp. z o.o. to dynamicznie rozwijająca się firma działająca w branży nieruchomości. Nasza oferta obejmuje wynajem lokali użytkowych i mieszkań, a także kompleksowe zarządzanie nieruchomościami.",
      paragraphTwo:
        "Z pasją i zaangażowaniem wspieramy naszych klientów w realizacji ich inwestycyjnych celów, oferując profesjonalne doradztwo i wsparcie na każdym etapie.",
    },
    sectionTwo: {
      header: "Profesjonalne doradztwo inwestycyjne",
      paragraphOne:
        "Specjalizujemy się w szeroko pojętej branży nieruchomości, oferując wynajem mieszkań i lokali użytkowych oraz kompleksowe zarządzanie nieruchomościami.",
      paragraphTwo:
        "LTC Investments sp. z o.o. to zespół doświadczonych specjalistów, którzy z pasją podchodzą do inwestycji i doradztwa inwestycyjnego, pomagając klientom osiągnąć maksymalne korzyści z ich przedsięwzięć.",
    },
  },

  contact: {
    header: "Skontaktuj się z nami",

    addressStreet: "Al. Jana Pawła II 58 B/7",
    addressCode: "47-232",
    addressCity: "Kędzierzyn-Koźle",
    addressCountry: "Polska",
    krsLabel: "KRS",
    nipLabel: "NIP",
    regonLabel: "REGON",
  },

  home: {
    brandName: "LTC Investments",
    brandSlogan: {
      start: "Twoja inwestycja, Nasza",
      endings: ["pasja", "specjalność", "przyszłość"],
    },
    infoChunks: {
      first: {
        header: "Wynajem nieruchomości",
        content:
          "Oferujemy wynajem mieszkań i lokali użytkowych dostosowanych do Twoich potrzeb. Nasza elastyczność i indywidualne podejście gwarantują satysfakcję z wyboru idealnej przestrzeni.",
      },
      second: {
        header: "Zarządzanie najmem",
        content:
          "Posiadasz nieruchomość wymagającą stałej opieki? Nasza kompleksowa obsługa najmu zapewni Ci spokój i bezpieczeństwo na każdym etapie.",
      },
      third: {
        header: "Działalność deweloperska",
        content:
          "Realizujemy projekty deweloperskie, które łączą nowoczesność z funkcjonalnością. Nasza pasja do tworzenia wyjątkowych przestrzeni jest widoczna w każdym detalu.",
      },
      fourth: {
        header: "Działalność inwestycyjna",
        content:
          "Inwestowanie w nieruchomości z nami to gwarancja zwrotu i bezpieczeństwa. Zaufaj naszemu doświadczeniu i profesjonalizmowi, aby Twoje inwestycje przynosiły zyski.",
      },
    },
    aboutUsButton: "O nas",
  },

  investments: {
    header: "Inwestycje",
    sectionOne: {
      header: "Zaawansowane projekty",
      paragraphOne:
        "Specjalizujemy się w strategicznych inwestycjach w nieruchomości. Realizujemy projekty o wysokim potencjale zwrotu, zarówno w sektorze mieszkaniowym, jak i komercyjnym.",
      paragraphTwo:
        "Nasze inwestycje są starannie planowane i realizowane, aby maksymalizować wartość dla naszych klientów i partnerów. Każdy projekt jest analizowany pod kątem rentowności, lokalizacji i potencjału wzrostu.",
    },
    sectionTwo: {
      header: "Innowacyjne rozwiązania",
      paragraphOne:
        "Wdrażamy innowacyjne rozwiązania inwestycyjne, które odpowiadają na zmieniające się potrzeby rynku. Nasze projekty są oparte na najnowszych trendach i technologiach w branży nieruchomości.",
      paragraphTwo:
        "Dzięki doświadczeniu i wiedzy naszego zespołu, jesteśmy w stanie zaoferować inwestycje, które nie tylko spełniają oczekiwania naszych klientów, ale również wyznaczają nowe standardy w branży.",
    },
  },

  offers: {
    typesOfRealEstates: {
      apartments: "Mieszkania",
      houses: "Domy",
      premises: "Lokale",
      plots: "Działki",
    },

    header: "Nasze oferty",

    offerIsAvailable: "Oferta aktualna",

    defaultOffersCardsName: {
      apartments: "Mieszkanie na wynajem",
      houses: "Dom na sprzedaż",
      premises: "Lokal na wynajem",
      plots: "Działka na sprzedaż",
    },

    detailedDescriptions: {
      headers: {
        characteristics: "Charakterystyka",
        consultant: "Osoba do kontaktu",
        about: "O ofercie",
        location: "Lokalizacja",
        additionalInfo: "Dodatkowe informacje",
      },

      characteristicsKeys: {
        offerSymbol: "Symbol oferty",
        area: "Powierzchnia",
        buildingType: "Typ budynku",
        feesIncludedInRent: "Opłaty w czynszu",
        feesAdditional: "Opłaty dodatkowe",
        feesByMeters: "Opłaty wg liczników",
        rent: "Czynsz najmu",
        securityDeposit: "Kaucja zabezpieczająca",
        depositType: "Rodzaj kaucji",
        typeOfPremises: "Typ lokalu",
        floor: "Piętro",
        totalFloorsInBuilding: "Liczba pięter w budynku",
        roomCount: "Liczba pokoi",
        installations: "Instalacje",
        parkingPossible: "Możliwość parkowania",
        ownParking: "Własny parking",
        condition: "Stan",
        windows: "Okna",
        balcony: "Balkon",
        furniture: "Umeblowanie",
        plotDevelopment: "Zagospodarowanie działki",
        plotTopography: "Ukształtowanie terenu",
        plotFencing: "Ogrodzenie działki",
        gas: "Gaz",
        water: "Woda",
        electricity: "Prąd",
        accessRoad: "Droga dojazdowa",
        surroundings: "Otoczenie",
        location: "Położenie",
      },

      characteristicsValues: {
        buildingType: {
          tenement: "kamienica",
          block: "blok",
          "multi-unit building": "budynek wielolokalowy",
        },
        feesIncludedInRent: {
          "renovation-fund, water": "fundusz remontowy, woda",
          "renovation-fund, water, heating":
            "fundusz remontowy, woda, ogrzewanie",
          "renovation-fund, water, heating, garbage-collection":
            "fundusz remontowy, woda, ogrzewanie, wywóz śmieci",
          "renovation-fund, water, heating, garbage-collection, cleaning":
            "fundusz remontowy, woda, ogrzewanie, wywóz śmieci, sprzątanie",
        },
        feesAdditional: {
          media:
            "media: prąd, ogrzewanie, woda zimna i ciepła, śmieci, internet",
          electricity: "prąd",
          gas: "gaz",
          water: "woda",
          heating: "ogrzewanie",
          "electricity-and-water": "prąd i woda",
          "electricity-and-heating": "prąd i ogrzewanie",
          "electricity-and-gas": "prąd i gaz",
          "water-and-heating": "woda i ogrzewanie",
          "water-and-gas": "woda i gaz",
          "heating-and-gas": "ogrzewanie i gaz",
          "electricity-and-water-and-heating": "prąd, woda i ogrzewanie",
          "electricity-and-water-and-gas": "prąd, woda i gaz",
          "electricity-and-heating-and-gas": "prąd, ogrzewanie i gaz",
          "water-and-heating-and-gas": "woda, ogrzewanie i gaz",
          "electricity-and-water-and-heating-and-gas":
            "prąd, woda, ogrzewanie i gaz",
        },
        depositType: {
          "one-month": "jednomiesięczna",
          "two-months": "dwumiesięczna",
        },
        typeOfPremises: {
          "one-storey": "jednopoziomowy",
          "multi-storey": "wielopoziomowy",
        },
        installations: {
          new: "nowe",
          renewed: "odnowione",
          "to-renew": "do odnowienia",
          "to-replace": "do wymiany",
          "to-install": "do zainstalowania",
        },
        parkingPossible: {
          yes: "tak",
          no: "nie",
        },
        ownParking: {
          yes: "tak",
          no: "nie",
        },
        condition: {
          "need renovation": "do remontu",
          good: "dobry",
          "very good": "bardzo dobry",
          perfect: "idealny",
        },
        windows: {
          wooden: "drewniane",
          plastic: "plastikowe",
          aluminium: "aluminiowe",
          "aluminium-and-plastic": "aluminiowo-plastikowe",
        },
        balcony: {
          yes: "tak",
          no: "nie",
        },
        furniture: {
          furnished: "umeblowane",
          "partly-furnished": "częściowo umeblowane",
          unfurnished: "nieumeblowane",
        },
        plotDevelopment: {
          undeveloped: "niezabudowana",
          developed: "zabudowana",
        },
        plotTopography: {
          flat: "płaska",
          sloping: "pochyła",
          hill: "wzgórze",
        },
        plotFencing: {
          yes: "tak",
          no: "nie",
        },
        gas: {
          "in-street": "w ulicy",
          "in-building": "w budynku",
          no: "brak",
        },
        water: {
          "in-street": "w ulicy",
          "in-building": "w budynku",
          no: "brak",
        },
        electricity: {
          "in-street": "w ulicy",
          "in-building": "w budynku",
          no: "brak",
        },
        accessRoad: {
          asphalt: "asfaltowa",
          dirt: "polna",
          concrete: "betonowa",
        },
        surroundings: {
          "preset-for-apartments-in-infiniti":
            "domy, las, jezioro, siłownia, klub fitness, sauna, sklepy Lidl & Biedronka, piekarnia, stacja paliw Orlen, szkoła podstawowa, przedszkole, szkoła języków obcych, restauracja, sala zabaw dla dzieci, gabinety fizjoterapii i masażu, stomatolog, salony fryzjerskie, studio tatuażu, sklep z odżywkami, solarium, kawiarnia, korty tenisowe",
          houses: "domy",
          forest: "las",
          lake: "jezioro",
          river: "rzeka",
          mountains: "góry",
        },
        location: {
          city: "miasto",
          suburbs: "przedmieścia",
          village: "wieś",
          countryside: "okolica wiejska",
        },
      },

      realEstateSpecificDescriptionsByFamilyAndId: {
        apartments: {
          // B2 - infiniti
          1: {
            about:
              "Osoby wynajmujące mieszkanie otrzymują bezpłatnie karnety do Centrum Zdrowia INFINITI (siłownia, fitness i sauna).",
            location:
              "Mieszkanie znajduje się w doskonałej lokalizacji, łączącej spokój natury z wygodą miejskiej infrastruktury. W pobliżu znajdziesz malowniczy las oraz jezioro, idealne na spacery i aktywny wypoczynek na świeżym powietrzu. Miłośnicy sportu mogą korzystać z siłowni, klubu fitness, sauny oraz kortów tenisowych. Rodziny z dziećmi docenią bliskość placówek edukacyjnych, takich jak szkoła podstawowa, przedszkole i szkoła języków obcych, a także sali zabaw dla najmłodszych. W okolicy znajdują się liczne punkty usługowe, w tym gabinety fizjoterapii i masażu, stomatolog, salony fryzjerskie oraz studio tatuażu. Codzienne zakupy ułatwią sklepy Lidl i Biedronka, piekarnia oraz sklep z odżywkami. W pobliżu znajdziesz także restauracje, kawiarnie i solarium. Dodatkowym atutem jest wygodny dostęp do stacji paliw Orlen, co zapewnia komfortowe podróżowanie. To idealne miejsce dla osób ceniących zarówno spokój, jak i łatwy dostęp do pełnej infrastruktury miejskiej.",
            additionalInfo:
              "Zwierzęta dozwolone, po wcześniejszym ustaleniu z wynajmującym.",
          },

          // B5 - infiniti
          2: {
            about:
              "Osoby wynajmujące mieszkanie otrzymują bezpłatnie karnety do Centrum Zdrowia INFINITI (siłownia, fitness i sauna).",
            location:
              "Mieszkanie znajduje się w doskonałej lokalizacji, łączącej spokój natury z wygodą miejskiej infrastruktury. W pobliżu znajdziesz malowniczy las oraz jezioro, idealne na spacery i aktywny wypoczynek na świeżym powietrzu. Miłośnicy sportu mogą korzystać z siłowni, klubu fitness, sauny oraz kortów tenisowych. Rodziny z dziećmi docenią bliskość placówek edukacyjnych, takich jak szkoła podstawowa, przedszkole i szkoła języków obcych, a także sali zabaw dla najmłodszych. W okolicy znajdują się liczne punkty usługowe, w tym gabinety fizjoterapii i masażu, stomatolog, salony fryzjerskie oraz studio tatuażu. Codzienne zakupy ułatwią sklepy Lidl i Biedronka, piekarnia oraz sklep z odżywkami. W pobliżu znajdziesz także restauracje, kawiarnie i solarium. Dodatkowym atutem jest wygodny dostęp do stacji paliw Orlen, co zapewnia komfortowe podróżowanie. To idealne miejsce dla osób ceniących zarówno spokój, jak i łatwy dostęp do pełnej infrastruktury miejskiej.",
            additionalInfo:
              "Mieszkanie posiada obszerny taras z grillem i widokiem na jezioro. Zwierzęta dozwolone, po wcześniejszym ustaleniu z wynajmującym",
          },
        },

        houses: {
          1: {
            about: "houses 1 | domy domy domy",
            location: "houses 1 | lokalizacja lokalizacja lokalizacja",
            additionalInfo:
              "houses 1 | dodatkowe informacje dodatkowe informacje dodatkowe informacje",
          },

          2: {
            about: "houses 2 | domy domy domy",
            location: "houses 2 | lokalizacja lokalizacja lokalizacja",
            additionalInfo:
              "houses 2 | dodatkowe informacje dodatkowe informacje dodatkowe informacje",
          },
        },

        premises: {
          // restaurant + fitbar - infiniti
          1: {
            about: "premises 1 | lokale lokale lokale",
            location: "premises 1 | lokalizacja lokalizacja lokalizacja",
            additionalInfo:
              "premises 1 | dodatkowe informacje dodatkowe informacje dodatkowe informacje",
          },
          // shop - infiniti
          2: {
            about: "premises 2 | lokale lokale lokale",
            location: "premises 2 | lokalizacja lokalizacja lokalizacja",
            additionalInfo:
              "premises 2 | dodatkowe informacje dodatkowe informacje dodatkowe informacje",
          },
        },

        plots: {
          1: {
            about: "plots 1 | działki działki działki",
            location: "plots 1 | lokalizacja lokalizacja lokalizacja",
            additionalInfo:
              "plots 1 | dodatkowe informacje dodatkowe informacje dodatkowe informacje",
          },

          2: {
            about: "plots 2 | działki działki działki",
            location: "plots 2 | lokalizacja lokalizacja lokalizacja",
            additionalInfo:
              "plots 2 | dodatkowe informacje dodatkowe informacje dodatkowe informacje",
          },
        },
      },
    },
  },
};
