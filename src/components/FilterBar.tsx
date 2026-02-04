import { useState } from 'react';
import { Search, Filter, Grid, LayoutGrid } from 'lucide-react';

interface FilterBarProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  sortBy: 'newest' | 'featured';
  onSortChange: (sort: 'newest' | 'featured') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode?: 'grid' | 'masonry';
  onViewModeChange?: (mode: 'grid' | 'masonry') => void;
}

const FilterBar = ({
  categories,
  activeFilter,
  onFilterChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
  viewMode = 'grid',
  onViewModeChange,
}: FilterBarProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="mb-8 space-y-4">
      {/* Search and Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Sort and View Controls */}
        <div className="flex items-center gap-3">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as 'newest' | 'featured')}
            className="px-4 py-2.5 rounded-lg bg-secondary/50 border border-border text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
          >
            <option value="newest">Newest First</option>
            <option value="featured">Featured First</option>
          </select>

          {/* View Mode Toggle */}
          {onViewModeChange && (
            <div className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-secondary/50 border border-border">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => onViewModeChange('masonry')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'masonry' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden p-2.5 rounded-lg bg-secondary/50 border border-border text-foreground"
          >
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className={`flex flex-wrap gap-2 ${isFilterOpen ? 'block' : 'hidden md:flex'}`}>
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeFilter === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
