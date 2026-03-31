function FilterBar({ filters, activeFilter, onChange }) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            className={`rounded-full border px-5 py-2 text-sm font-medium tracking-tight transition duration-300 ${
              isActive
                ? 'bg-secondary text-primary border-soft shadow-sm'
                : 'text-secondary border-soft bg-transparent hover:brightness-105'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

export default FilterBar
