function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = ["all", "premium", "mid-range", "budget"];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <input
          type="text"
          placeholder="Mobile search karein..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-700 placeholder-gray-400"
        />

        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;