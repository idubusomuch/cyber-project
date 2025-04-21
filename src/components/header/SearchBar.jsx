import Search from '@icons/32px/Search.svg';
export function SearchBar() {
  return (
    <div className="hidden md:flex rounded-md bg-[#f5f5f5] p-2 ml-6">
      <img src={Search} alt="검색" />
      <input
        placeholder="search"
        className="bg-transparent pl-2 focus:outline-none"
      />
    </div>
  );
}
