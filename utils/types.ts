export type CatFilters = {
  withDogs?: boolean;
  withCats?: boolean;
  sex?: string;
  color?: string;
  date?: string;
};

export type Cat = {
  _id: string;
  _type: "cat";
  name: string;
  aboutMe: any;
  showOnWebsite: boolean;
  birthDate: string;
  adoptionDate: string;
  chipped: boolean;
  certificateHealthy: boolean;
  healthBook: boolean;
  sterilised: boolean;
  withDogs: boolean;
  withCats: boolean;
  character: string;
  reserved: boolean;
  adopted: boolean;
  deceased: boolean;
  iconsOnCard: string[];
  sex: "female" | "male";
  images: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[];
  color: string;
  arrivalDate: string;
  history: string;
  protocolDate: string;
  careReceived: string;
  hostFamily: {
    _ref: string;
    _type: "reference";
  };
  adoptionFamily: {
    _ref: string;
    _type: "reference";
  };
  chipId: string;
  notes: string;
  deedOfTransfer: boolean;
  weights: {
    _key: string;
    _type: "weight";
    value: number;
    date: string;
  }[];
  tests: {
    _key: string;
    _type: "test";
    date: string;
    testType: "test_fiv" | "test_felv" | "other";
    outcome: "positive" | "negative" | "other";
    notes: string;
  }[];
  treatments: {
    _key: string;
    _type: "treatment";
    date: string;
    treatmentType:
    | "vaccination_first"
    | "vaccination_second"
    | "deworming"
    | "spay_neuter_surgery"
    | "microchipping"
    | "flea_tick_prevention"
    | "ear_mite_treatment"
    | "rabies_vaccination"
    | "dental_cleaning"
    | "other";
    notes: string;
  }[];
};