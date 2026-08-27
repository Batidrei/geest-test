export default function SkeletonList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border mt-8 border-gray-200">
      <div className="h-6 bg-gray-300 rounded mb-4 animate-pulse"></div>
      <ul className="divide-y divide-gray-200">
        {[1, 2, 3].map((i) => (
          <li key={i} className="py-4 flex justify-between items-center animate-pulse">
            <div className="w-1/2">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="w-1/4 flex flex-col items-end">
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}