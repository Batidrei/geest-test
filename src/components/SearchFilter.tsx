// src/components/SearchFilter.tsx

export default function SearchFilter({
  searchTerm,
  onSearchChange,
  filterDepartment,
  onFilterDepartmentChange
}: {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterDepartment: string;
  onFilterDepartmentChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">

      {/* Input: Search */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Buscar usuario por nombre..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
        />
      </div>

      {/* Input: Department */}
      <div className="w-full sm:w-64">
        <select
          value={filterDepartment}
          onChange={(e) => onFilterDepartmentChange(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
        >
          <option value="">Todos los departamentos</option>
          <option value="Ventas">Ventas</option>
          <option value="Desarrollo">Desarrollo</option>
          <option value="Marketing">Marketing</option>
          <option value="Soporte">Soporte</option>
        </select>
      </div>
    </div>
  );
}