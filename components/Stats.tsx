import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

export default function Stats() {
  return (
    <div className="relative my-32 w-full py-16">
      <Image
        src={"/stat_bg.png"}
        alt="stats"
        fill
        className="absolute inset-0 object-cover object-center opacity-15"
      />
      <MaxWidthWrapper className="flex flex-wrap items-center justify-center gap-24">
        <div>
          <Image
            className="mx-auto mb-2"
            src={"/stat_1.png"}
            alt="stats"
            width={80}
            height={80}
          />
          <p className="mb-4 text-center">Professional Chefs</p>
          <p className="text-center text-xl font-bold">420</p>
        </div>
        <div>
          <Image
            className="mx-auto mb-2"
            src={"/stat_2.png"}
            alt="stats"
            width={80}
            height={80}
          />
          <p className="mb-4 text-center">Items of Food</p>
          <p className="text-center text-xl font-bold">230</p>
        </div>
        <div>
          <Image
            className="mx-auto mb-2"
            src={"/stat_3.png"}
            alt="stats"
            width={80}
            height={80}
          />
          <p className="mb-4 text-center">Years pf Experience</p>
          <p className="text-center text-xl font-bold">30+</p>
        </div>
        <div>
          <Image
            className="mx-auto mb-2"
            src={"/stat_4.png"}
            alt="stats"
            width={80}
            height={80}
          />
          <p className="mb-4 text-center">Happy Customers</p>
          <p className="text-center text-xl font-bold">220</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
