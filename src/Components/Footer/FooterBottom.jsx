export default function FooterBottom() {
  return (
    <div className="flex flex-row justify-center items-center p-5">
      <div className="flex flex-col gap-2">
        <div>
          <p>Support</p>
        </div>
        <div>
          <ul>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Help Center
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              AirCover
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Anti-discrimination
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Disability support
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Cancellation options
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Report neighborhood concern
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p>Hosting</p>
        </div>
        <div>
          <ul>
            <li className="cursor-pointer  border border-transparent">
              Airbnb your home
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              AirCover for Hosts
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Hosting resources
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Community forum
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Hosting responsibly
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Airbnb-friendly apartments
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <p>Airbnb</p>
        </div>
        <div>
          <ul>
            <li className="cursor-pointer hover:border-b border border-transparent hover:border-b">
              Newsroom
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              New features
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Careers
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Investors
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Gift cards
            </li>
            <li className="cursor-pointer hover:border-b border border-transparent">
              Airbnb.org emergency stats
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
