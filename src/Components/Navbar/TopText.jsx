export default function TopText(props) {
  return (
    <div
      className={`${props.className}"flex justify-center items-center pt-5 p-3 pb-4 border-b bg-[#F59794] bg-opacity-10 cursor-pointer"`}
    >
      <a
        target="_blank"
        href="https://www.airbnb.com/release"
        className="underline decoration-solid font-medium"
      >
        Learn about Guest Favorites, the most loved homes on Airbnb
      </a>
    </div>
  );
}
