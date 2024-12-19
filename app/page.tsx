import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Stats from "@/components/Stats";
import {
  CheckFat,
  Cookie,
  FacebookLogo,
  Hamburger,
  PinterestLogo,
  TwitterLogo,
  Wine,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-foreground text-background">
      <h1 className="pt-6 text-center font-extrabold">
        <span className="text-primary">Food</span>tuck
      </h1>
      <Header />
      <HeroSection />
      <AboutSection />
      <FoodCategorySection />
      <WhyChooseUsSection />
      <Stats />
      <MenuSection />
      {/* <Footer /> */}
    </main>
  );
}

function HeroSection() {
  return (
    <MaxWidthWrapper className="my-10 flex max-w-5xl items-center justify-between max-md:flex-wrap">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div>
          <div className="mx-auto flex flex-row items-center space-x-8 space-y-0 md:flex-col md:space-y-8">
            {/* <!-- Top Line (Vertical on Large, Hidden on Small) --> */}
            <div className="hidden h-24 w-px bg-white md:block"></div>
            {/* <!-- Left Line (Horizontal on Small) --> */}
            <div className="block h-px w-24 bg-white md:hidden"></div>

            {/* <!-- Social Icons --> */}
            <div className="flex space-x-8 space-y-0 text-white md:flex-col md:space-x-0 md:space-y-8">
              {/* <!-- Facebook Icon --> */}
              <FacebookLogo />

              {/* <!-- Twitter Icon --> */}
              <TwitterLogo weight="fill" className="text-primary" />

              {/* <!-- Pinterest Icon --> */}
              <PinterestLogo />
            </div>

            {/* <!-- Bottom Line (Vertical on Large, Hidden on Small) --> */}
            <div className="hidden h-24 w-px bg-white md:block"></div>
            {/* <!-- Right Line (Horizontal on Small) --> */}
            <div className="block h-px w-24 bg-white md:hidden"></div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-great-vibes text-2xl text-primary">
            Its Quick & Amusing!
          </h3>
          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            <span className="text-primary">Th</span>e Art of speed
            <br /> food Quality
          </h2>
          <p className="mb-8 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Varius sed pharetra dictum neque massa congue
          </p>
          <button className="rounded-full bg-primary px-12 py-4 text-xs">
            See Menu
          </button>
        </div>
      </div>
      <Image
        src={"/hero.png"}
        alt="hero"
        width={600}
        height={600}
        className="rounded-full"
      />
    </MaxWidthWrapper>
  );
}

function AboutSection() {
  return (
    <MaxWidthWrapper className="my-32 flex items-center justify-between gap-10 max-md:flex-wrap">
      <div>
        <div>
          <h3 className="mb-2 font-great-vibes text-2xl text-primary">
            About Us
          </h3>
          <h2 className="mb-8 text-4xl font-bold">
            <span className="text-primary">We</span> Create the best foody
            product
          </h2>
          <p className="mb-8 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="mb-8 flex flex-col space-y-4 text-xs">
            <p className="flex gap-2">
              <CheckFat weight="fill" /> Lacus nisi, et ac dapibus sit eu velit
              in consequat.
            </p>
            <p className="flex gap-2">
              <CheckFat weight="fill" /> Quisque diam pellentesque bibendum non
              dui volutpat fringilla
            </p>
            <p className="flex gap-2">
              <CheckFat weight="fill" /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit
            </p>
          </div>
          <button className="rounded-full bg-primary px-12 py-4 text-xs">
            Read More
          </button>
        </div>
      </div>
      <Image src={"/about.png"} alt="about" width={420} height={420} />
    </MaxWidthWrapper>
  );
}

function FoodCategorySection() {
  return (
    <MaxWidthWrapper className="my-32">
      <h2 className="mb-4 text-center font-great-vibes text-2xl text-primary">
        Food Category
      </h2>
      <h3 className="mb-8 text-center text-3xl font-bold">
        <span className="text-primary">Ch</span>oose Food Item
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {[1, 2, 3, 4].map((n) => (
          <Image
            key={n}
            src={`/home_cat_${n}.png`}
            alt="cat"
            width={200}
            height={200}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

function WhyChooseUsSection() {
  return (
    <MaxWidthWrapper className="my-32 flex items-center gap-20 max-md:flex-wrap-reverse">
      <Image
        src={"/home_why_choose_us.png"}
        alt="why choose us"
        width={450}
        height={450}
      />
      <div>
        <h2 className="mb-4 font-great-vibes text-2xl text-primary">
          Why Choose Us?
        </h2>
        <h2 className="mb-8 text-3xl font-bold">
          <span className="text-primary">Ex</span>ta ordinary taste And
          Experienced
        </h2>
        <p className="mb-4 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-lg bg-primary p-4 text-4xl">
            <Hamburger weight="thin" />
          </div>
          <div className="rounded-lg bg-primary p-4 text-4xl">
            <Cookie weight="thin" />
          </div>
          <div className="rounded-lg bg-primary p-4 text-4xl">
            <Wine weight="thin" />
          </div>
        </div>
        <div className="flex w-3/4 items-center gap-4 rounded-md border-l-8 border-primary bg-white p-4">
          <span className="text-2xl font-bold text-primary">30+</span>
          <p className="flex flex-col text-xs">
            <span className="text-gray-400">Years of</span>
            <span className="font-bold text-gray-500">Experience</span>
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

function MenuSection() {
  return (
    <MaxWidthWrapper className="my-32">
      <h3 className="mb-4 text-center font-great-vibes text-2xl text-primary">
        Choose & pick
      </h3>
      <h4 className="text-center text-3xl font-bold">
        <span className="text-primary">Fr</span>om Our Menu
      </h4>
      <div className="mt-16 flex items-center justify-center gap-16 max-md:flex-wrap max-md:gap-4">
        <p>Breakfast</p>
        <p>Lunch</p>
        <p>Dinner</p>
        <p>Dessert</p>
        <p>Drinks</p>
        <p>Snacks</p>
        <p>Soups</p>
      </div>

      <div className="flex gap-10 p-12 max-md:flex-wrap">
        <Image
          src={"/home_menu_1.png"}
          alt="menu"
          width={600}
          height={600}
          className="w-2/5 max-md:w-full"
        />
        <div className="flex w-3/5 gap-6 max-md:w-full">
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex gap-2">
                <Image
                  src={"/home_menu_2.png"}
                  alt={n + " image"}
                  className="max-md:w-hidden rounded-lg object-cover"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-xs font-bold">Lettuce Leaf</p>
                  <p className="text-xs">Lorem ipsum dolor sit amet</p>
                  <p className="text-xs font-bold text-primary">$12.5</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex gap-2">
                <Image
                  src={"/home_menu_2.png"}
                  alt={n + " image"}
                  className="rounded-lg object-cover"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-xs font-bold">Lettuce Leaf</p>
                  <p className="text-xs">Lorem ipsum dolor sit amet</p>
                  <p className="text-xs font-bold text-primary">$12.5</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
