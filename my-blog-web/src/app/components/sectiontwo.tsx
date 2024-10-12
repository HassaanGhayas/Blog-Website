import Link from "next/link";

export default function Blogs() {
  return (
    <section className="flex items-center justify-center">
      <div className="mx-5 grid grid-rows-4 grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 xl:grid-rows-3 gap-3 sm:gap-10 mt-[100px] xl:grid-cols-2 ">
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/rose.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Rose: The Eternal Beauty
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/rose">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/sunflower.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Sunflower: A Ray of Happiness
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/sunflower">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/lily.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Lily: Elegance in Bloom
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/lily">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/tulip.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Tulip: A Springtime Favorite
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/tulip">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/peony.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Peony: Layers of Luxury
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/peony">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/orchid.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Orchid: Exotic and Rare
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/orchid">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/daisy.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Daisy: Simplicity and Joy
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/daisy">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/lavender.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Lavender: Fragrance and Calm
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/lavender">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/jasmine.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Jasmine: Night Bloomer
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/jasmine">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-orange-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-orange-500 hover:text-orange-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
