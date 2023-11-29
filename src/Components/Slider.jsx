import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getArrSlider } from "../ultis/function";
import * as actions from "../store/actions";
function Slider() {
  const { banner } = useSelector((state) => state.app);

  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    let min = 0;
    let max = 2;

    // setInterval ham thay doi time 5000 = 5s
    // const intervalId = setInterval(changeSlide, 10000);
    // ham clearInterval giảm rò rỉ bộ nhớ

    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length - 1);
      for (let i = 0; i < sliderEls.length; i++) {
        // xóa tên lớp css
        sliderEls[i].classList.remove(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
        sliderEls[i].classList.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        sliderEls[i].classList.remove("animate-slide-left2", "order-2", "z-10");
        if (list.some((item) => item === i)) {
          sliderEls[i].style.cssText = "display: block";
        } else {
          sliderEls[i].style.cssText = "display: none";
        }
      }
      list.forEach((item) => {
        if (item === max) {
          sliderEls[item].classList.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === min) {
          sliderEls[item].classList.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          sliderEls[item].classList.add(
            "animate-slide-left2",
            "order-2",
            "z-10"
          );
        }
      });
      min = min === sliderEls.length - 1 ? 0 : min + 1;

      max = max === sliderEls.length - 1 ? 0 : max + 1;
    }, 3500);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, []);
  // const handleClickBanner = (item) => {
  //   if (item?.type === 1) {
  //     dispatch(actions.setCur);
  //   }
  // };
  return (
    <div className="w-full overflow-hidden px-[90px">
      <div className="flex gap-5 w-full overflow-hidden px-[60px] pt-8 items-center justify-center">
        {banner?.map((item, index) => (
          <img
            key={item.encodeId}
            src={item.banner}
            // onClick={() => handleClickBanner(item)}
            className={`slider-item flex-1 object-contain  w-1/3 rounded-lg ${
              index <= 2 ? "block" : "hidden "
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
