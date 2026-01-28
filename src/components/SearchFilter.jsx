
function SearchFilter({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = ["all", "premium", "mid-range", "budget"];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-sm p-4 sm:p-6 space-y-4">

        {/* Search Input */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search mobiles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200
            focus:ring-2 focus:ring-sky-400 focus:border-sky-400
            transition text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold capitalize whitespace-nowrap transition-all
                ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SearchFilter;
