import MotionHoc from "./MotionHoc";

const HomeComponent = () => {
  return (
    <>
      <h1 class="text-center">Preventa de Tokens</h1>

      <div class="flex flex-row">
        <div class=" max-w-2xl mx-auto mt-24 space-y-20">
          <div class="max-w-screen-md md:w-3/4 mx-auto">
            <div class="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-orange-400 rounded-xl">
              <p class="w-full text-2xl font-semibold text-white">
                Progreso y Fecha
              </p>
              <p class="w-full pb-8 text-sm tracking-wide leading-tight text-white">
                La venta termina en: 07 dias, 19 horas y 16 minutos
              </p>
              <div class="relative  w-full h-5 bg-white rounded-lg">
                <div
                  class="absolute top-0 left-0 h-5 bg-gray-700 rounded-lg"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p class="w-full text-sm tracking-wide leading-tight text-white">
                Vendido: 2,301,344.12 USD
              </p>
              <p class="w-full pb-8 text-sm tracking-wide leading-tight text-white">
                Meta: 2,500,000 USD
              </p>
              <div class="rounded mr-auto mt-8">
                <div class="opacity-95 border rounded-lg border-white px-4">
                  <p class="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">
                    Buy Now
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-screen md:w-3/4 mx-auto">
            <div class="flex flex-row space-y-2 items-center justify-center h-full py-4 bg-gray-800 rounded-xl space-x-10">
              <div class="w-2/3">
                <p class="w-full text-2xl font-semibold text-white">
                  We love pixels
                </p>
                <p class="w-full pb-8 text-sm tracking-wide leading-tight text-white">
                  The card layouts can vary to support the types of content they
                  contain.
                </p>
                <div class="rounded w-1/3">
                  <div class="opacity-95 border rounded-lg border-white px-4">
                    <p class="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">
                      License
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-auto h-">
                <img
                  class="flex-1 h-full rounded-lg"
                  src="https://via.placeholder.com/96x136"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-2xl bg-gradient-to-r from-gray-500 via-orange-500 to-yellow-500 p-1 shadow-xl">
          <a class="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
            <div class="mt-16">
              <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                Pre venta
              </h3>

              <p class="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                adipisci.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

const Home = MotionHoc(HomeComponent);

export default Home;
