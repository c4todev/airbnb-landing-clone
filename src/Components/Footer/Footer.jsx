import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <FooterTop />
      <hr className="h-[1px] mt-4 bg-gray-300" />
      <FooterBottom />
    </div>
  );
}
