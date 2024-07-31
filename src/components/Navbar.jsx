import { ClockIcon } from "./icons/ClockIcon";
import { MapIcon } from "./icons/MapIcon";

export function Navbar() {
  return (
    <section className="flex justify-between">
      <div className="space-y-3">
        <h1 className="text-[#C7F070] text-6xl lg:text-7xl flex flex-col font-semibold">
          THE ELIXIR{" "}
          <span className="text-4xl font-medium border-b-4 border-[#C7F070] w-20 h-12">
            BAR
          </span>
        </h1>
        <div className="text-pretty lg:text-lg space-y-2 w-[160px] lg:w-[490px]">
          <p>
            Disfrute de un mundo de cócteles y licores sofisticados en un solo
            lugar.
          </p>
          <p>Horario de atención:</p>
        </div>
        <p className="flex items-center gap-2 text-sm lg:text-base">
          <ClockIcon className="w-9 h-9 lg:h-auto lg:w-auto" /> Lunes a Domingo de 17:00 pm a 01:00 am
        </p>
        <p className="flex items-center gap-2 text-sm lg:text-base">
          <MapIcon className="w-6 h-6 lg:h-auto lg:w-auto" /> Calle Plateros 305, Cusco
        </p>
      </div>
      <div>
        <img
          src="./img/1a.webp"
          alt=""
          className="w-[1000px] h-[600px] lg:w-[480px] lg:h-[450px] -mt-24 lg:-mt-20 object-cover"
        />
      </div>
    </section>
  );
}
