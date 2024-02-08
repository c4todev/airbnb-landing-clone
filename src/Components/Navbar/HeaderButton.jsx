export default function HeaderButton({ children, onSelect, isSelected }) {
  return (
    <button
      className={
        isSelected
          ? "cursor-pointer rounded-full p-0 px-4 py-2"
          : "cursor-pointer hover:bg-gray-100 hover:opacity-75 opacity-50 rounded-full p-0 px-4 py-2"
      }
      onClick={onSelect}
    >
      <span className="tracking-tight leading-6 text-base text-nowrap">
        {children}
      </span>
    </button>
  );
}
