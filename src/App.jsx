import "@fontsource-variable/onest";
import { ClockIcon } from "./components/icons/ClockIcon";
import { MapIcon } from "./components/icons/MapIcon";
function App() {
  return (
    <div className="py-10 px-3 lg:px-80">
      <div className="bg-[#141414] p-10 rounded-lg shadow-sm shadow-white">
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
                Disfrute de un mundo de cócteles y licores sofisticados en un
                solo lugar.
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
        <section className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-[#C7F070] text-4xl font-semibold border-b-4 border-dotted border-[#C7F070] w-48">
              CÓCTELES
            </h2>
            <div className="flex justify-between">
              <p>pisco sour</p>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <p>pisco sour</p>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <p>pisco sour</p>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <p>pisco sour</p>
              <span>$10</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#C7F070] text-4xl font-semibold border-b-4 border-dotted border-[#C7F070] w-48">
              WHISKEY
            </h2>
            <div className="flex justify-between">
              <p>pisco sour</p>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <p>pisco sour</p>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <p>pisco sour</p>
              <span>$10</span>
            </div>
            <div className="flex justify-between">
              <p>pisco sour</p>
              <span>$10</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
