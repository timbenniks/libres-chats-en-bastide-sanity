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
    ${filters.chipped !== undefined ? `&& chipped == $chipped` : ''}
    ${filters.certificateHealthy !== undefined ? `&& certificateHealthy == $certificateHealthy` : ''}
    ${filters.healthBook !== undefined ? `&& healthBook == $healthBook` : ''}
    ${filters.sterilised !== undefined ? `&& sterilised == $sterilised` : ''}
    ${filters.withDogs !== undefined ? `&& withDogs == $withDogs` : ''}
    ${filters.withCats !== undefined ? `&& withCats == $withCats` : ''}
    ${filters.reserved !== undefined ? `&& reserved == $reserved` : ''}
    ${filters.adopted !== undefined ? `&& adopted == $adopted` : ''}
    ${filters.deceased !== undefined ? `&& deceased == $deceased` : ''}
    ${filters.sex ? `&& sex == $sex` : ''}
    ${filters.color ? `&& color match $color` : ''}
    ${filters.deedOfTransfer !== undefined ? `&& deedOfTransfer == $deedOfTransfer` : ''}
    ]`;

  return query;
}

export function useCatsQuery(filters: CatFilters) {
  return buildCatQuery(filters);
}