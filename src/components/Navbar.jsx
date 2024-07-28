import { ClockIcon } from "./icons/ClockIcon";
import { MapIcon } from "./icons/MapIcon";

export function Navbar() {
  return (
    <section className="flex justify-between">
      <div className="space-y-3">
        <h1 className="text-[#C7F070] text-7xl flex flex-col font-semibold">
          THE ELIXIR{" "}
          <span className="text-4xl font-medium border-b-4 border-[#C7F070] w-20 h-12">
            BAR
          </span>
        </h1>
        <div className="text-pretty text-lg space-y-2 w-[490px]">
          <p>
            Disfrute de un mundo de cócteles y licores sofisticados en un solo
            lugar.
          </p>
          <p>Horario de atención:</p>
        </div>
        <p className="flex items-center gap-2">
          <ClockIcon /> Lunes a Domingo de 17:00 pm a 01:00 am
        </p>
        <p className="flex items-center gap-2">
          <MapIcon /> Calle Plateros 305, Cusco
        </p>
      </div>
      <div>
        <img
          src="./img/1a.webp"
          alt=""
          className="w-[480px] h-[450px] -mt-20"
        />
      </div>
    </section>
  );
}
