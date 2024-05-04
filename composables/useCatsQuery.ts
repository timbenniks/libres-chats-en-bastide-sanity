interface CatFilters {
  name?: string;
  chipped?: boolean;
  certificateHealthy?: boolean;
  healthBook?: boolean;
  sterilised?: boolean;
  withDogs?: boolean;
  withCats?: boolean;
  reserved?: boolean;
  adopted?: boolean;
  deceased?: boolean;
  sex?: 'female' | 'male';
  color?: string;
  deedOfTransfer?: boolean;
}

function buildCatQuery(filters: CatFilters): string {
  const query = groq`
    *[_type == "cat"
    ${filters.name ? `&& name match $name` : ''}
    ${filters.withDogs !== undefined ? `&& withDogs == $withDogs` : ''}
    ${filters.withCats !== undefined ? `&& withCats == $withCats` : ''}
    ${filters.sex ? `&& sex == $sex` : ''}
    ${filters.color ? `&& color match $color` : ''},
    // geboorte datum range
    //  - < 6 maanden
    //  - tussen 6 en 12 maanden
    //  - > 1 jaar
    ]`;

  return query;
}

export function useCatsQuery(filters: CatFilters) {
  return buildCatQuery(filters);
}