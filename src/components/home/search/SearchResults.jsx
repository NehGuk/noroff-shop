import NoResults from "./NoResults";
import SearchResultsList from "./SearchResultsList";

export default function SearchResults(results) {
  const { results: filteredResults } = results;

  return (
    <div>
      {filteredResults.length === 0 && (
        <div>
          <NoResults />
        </div>
      )}
      <SearchResultsList data={filteredResults} />
    </div>
  );
}
