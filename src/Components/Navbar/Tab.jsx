export default function Tab({ tag, image, handleSelectType, className }) {
  return (
    <div>
      <button onClick={handleSelectType} className={className}>
        <img className="h-6 w-6" src={image} />
        <p className="text-xs mt-2 font-medium text-nowrap">{tag}</p>
      </button>
    </div>
  );
}
