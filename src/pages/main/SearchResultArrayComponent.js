export default function SearchResultArrayComponent({ searchResult }) {
  return (
    <>
      {searchResult.map(value => {
        return <span key={value.id}>{value.id}</span>;
      })}
    </>
  );
}
