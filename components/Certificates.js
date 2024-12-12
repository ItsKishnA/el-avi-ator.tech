import Image from "next/image";
import React, { useState } from "react";

const Certificates = () => {
  const _arrowSize = 30;

  const _src = [
    "/certificates/jscript.jpg",
    "/certificates/pm_pmmi.jpg",
    "/certificates/GRiD_partic.jpg",
  ];
  var [currentSlide, setCurrentSlide] = useState(1);

  const Slider = ({ value }) => {
    return (
      <div className="relative w-[100%] h-[100%] flex flex-1 justify-center align-middle content-center items-center">
        <Image
          src={_src[value]}
          alt="Certificates"
          height={500}
          width={500}
          className="rounded-2xl"
          style={{ objectFit: "contain" }}
          loading="eager"
          quality={75}
          // layout="responsive"
          unoptimized
          // fill
        />
      </div>
    );
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide((toSlide) => toSlide - 1);
    else setCurrentSlide(_src.length - 1);
  };

  const nextSlide = () => {
    if (currentSlide < _src.length - 1)
      setCurrentSlide((toSlide) => toSlide + 1);
    else setCurrentSlide(0);
  };

  const SlideChanger = ({ show, onPress }) => {
    return (
      <div className="flex items-center justify-center ">
        <button
          className="group text-white rounded-full p-2 z-10"
          onClick={() => onPress()}
        >
          {show}
        </button>
      </div>
    );
  };

  return (
    //  w-[80vw] max-w-[680px]
    <div className=" flex flex-1 w-[80dvw] max-w-[680px] min-w-[360px] h-auto flex-col items-center justify-center p-2 ">
      {/* <h3 className="text-white text-lg font-mono">Certificates</h3> */}
      <div className=" flex justify-center flex-row items-center rounded-2xl content-center">
        {/* arrow button for left sliding */}
        <SlideChanger
          show={_svgArrow({ _arrowSize })}
          onPress={() => prevSlide()}
        />

        <div className="flex relative ">{Slider({ value: currentSlide })}</div>

        {/* arrow button for right sliding */}
        <SlideChanger
          show={_svgArrow({ _arrowSize, rotation: 0 })}
          onPress={() => nextSlide()}
        />
      </div>
    </div>
  );
};

const _svgArrow = ({ _arrowSize, rotation = 180 }) => {
  return (
    <svg
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      height={_arrowSize}
      width={_arrowSize}
      viewBox="0 0 511.999 511.999"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <path
        className="group-hover:fill-current group-hover:text-gray-500"
        fill="#fff"
        fillRule="nonzero"
        d="M0 256c0-70.685 28.658-134.695 74.981-181.019C121.305 28.658 185.308 0 256 0c70.691 0 134.694 28.658 181.018 74.981 46.323 46.324 74.981 110.327 74.981 181.019 0 70.691-28.658 134.694-74.981 181.018-46.324 46.323-110.327 74.981-181.018 74.981-70.692 0-134.695-28.658-181.019-74.981C28.658 390.694 0 326.691 0 256zm200.641 79.002c-17.862 30.984 6.963 46.316 25.063 29.013l101.045-88.741c16.137-16.13 16.137-22.426 0-38.563L225.704 147.97c-18.187-17.181-42.867-2.203-25.063 29.02l46.931 79.002-46.931 79.01z"
      />
    </svg>
  );
};

export default Certificates;
