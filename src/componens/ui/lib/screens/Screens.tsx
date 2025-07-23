import { FilterIcon, HomeIcon, StarIcon, UserPlusIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const Screen = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    {
      icon: <HomeIcon className="w-[70px] h-[70px] text-blue-400" />,
      src: "https://c.animaapp.com/mdf7ftsaFrvHrs/img/home-3316945-2761500.png",
      alt: "Home",
    },
    {
      icon: <FilterIcon className="w-[70px] h-[70px] text-blue-400" />,
      src: "https://c.animaapp.com/mdf7ftsaFrvHrs/img/filter-3316936-2761491.png",
      alt: "Filter",
    },
    {
      icon: <UserPlusIcon className="w-[70px] h-[70px] text-blue-400" />,
      src: "https://c.animaapp.com/mdf7ftsaFrvHrs/img/add-user-3316918-2761457.png",
      alt: "Add user",
    },
    {
      icon: <StarIcon className="w-[70px] h-[70px] text-blue-400" />,
      src: "https://c.animaapp.com/mdf7ftsaFrvHrs/img/star-3316952-2761507.png",
      alt: "Star",
    },
  ];

  // Cryptocurrency cards data
  const cryptoCards = [
    {
      name: "Toncoin (TON)",
      icon: "https://c.animaapp.com/mdf7ftsaFrvHrs/img/ton-symbol-1.png",
      textGradient:
        "bg-[linear-gradient(90deg,rgba(0,152,234,1)_0%,rgba(0,86,132,1)_100%)]",
      textShadow: "[text-shadow:0px_0px_3.15px_#0009ff11]",
      inputLeft: "left-[158px]",
      buttonGradient:
        "bg-[linear-gradient(90deg,rgba(73,49,253,1)_0%,rgba(44,29,151,1)_100%)]",
      buttonShadow:
        "shadow-[0px_0px_3.15px_#0010f415,0px_0px_6.52px_#0010f423,0px_0px_13px_#0010f42d,0px_0px_25.48px_#0010f436,0px_0px_46.85px_#0010f444,0px_0px_80px_#0010f459]",
      buttonLeft: "left-[190px]",
      minValue: "min 1 TON",
      minLeft: "left-[114px]",
      maxValue: "max 9999 TON",
      maxLeft: "left-[394px]",
      minTop: "top-[279px]",
      maxTop: "top-[277px]",
    },
    {
      name: "Tether (USDT)",
      icon: "https://c.animaapp.com/mdf7ftsaFrvHrs/img/rectangle.png",
      textGradient:
        "bg-[linear-gradient(90deg,rgba(37,162,122,1)_0%,rgba(14,60,45,1)_100%)]",
      textShadow: "[text-shadow:0px_0px_3.15px_#00ff8509]",
      inputLeft: "left-[675px]",
      buttonGradient:
        "bg-[linear-gradient(90deg,rgba(37,199,121,1)_0%,rgba(18,97,59,1)_100%)]",
      buttonShadow:
        "shadow-[0px_0px_3.15px_#00e86a14,0px_0px_6.52px_#00e86a21,0px_0px_13px_#00e86a2a,0px_0px_25.48px_#00e86a33,0px_0px_46.85px_#00e86a40,0px_0px_80px_#00e86a54]",
      buttonLeft: "left-[711px]",
      minValue: "min 5 USDT",
      minLeft: "left-[646px]",
      maxValue: "max 1000001 USDT",
      maxLeft: "left-[904px]",
      minTop: "top-[282px]",
      maxTop: "top-[281px]",
    },
  ];

  return (
    <div
      className="bg-transparent flex flex-row justify-center w-full"
      data-model-id="9:8056"
    >
      <div className="overflow-hidden bg-[url(https://c.animaapp.com/mdf7ftsaFrvHrs/img/star-field.svg)] bg-[100%_100%] w-[1080px] h-[1920px] relative">
        <div className="absolute w-[1090px] h-[1979px] top-[357px] left-[-3px]">
          {/* Background images */}
          <img
            className="absolute w-[1080px] h-[1073px] top-[490px] left-[3px] object-cover"
            alt="Pngwing com"
            src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/pngwin---g-com-1.png"
          />

          <img
            className="absolute w-[1080px] h-[1378px] top-[185px] left-[3px] object-cover"
            alt="Icon"
            src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/icon17-3.png"
          />

          {/* Telegram button */}
          <div className="inline-flex items-center justify-end gap-2.5 p-2.5 absolute top-[1138px] left-[910px]">
            <img
              className="relative w-[126px] h-[129px] object-cover"
              alt="Telegram dark"
              src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/telegram-dark.png"
            />
          </div>

          {/* Navigation bar */}
          <div className="absolute w-[1090px] h-[633px] top-[1346px] left-0">
            <div className="absolute w-[1090px] h-[222px] top-0 left-0">
              <img
                className="absolute w-[1080px] h-[217px] top-0 left-[3px]"
                alt="Rectangle"
                src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/rectangle-2.svg"
              />

              <img
                className="absolute w-[1090px] h-[170px] top-[52px] left-0"
                alt="Rectangle"
                src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/rectangle-3.svg"
              />

              {/* Navigation icons */}
              {navItems.map((item, index) => (
                <img
                  key={`nav-${index}`}
                  className={`absolute w-[110px] h-[110px] ${
                    index === 0
                      ? "top-[85px] left-[88px]"
                      : index === 1
                        ? "top-[90px] left-[364px]"
                        : index === 2
                          ? "top-[78px] left-[620px]"
                          : "top-[78px] left-[889px]"
                  } object-cover`}
                  alt={item.alt}
                  src={item.src}
                />
              ))}

              <img
                className="absolute w-[361px] h-[191px] top-[26px] left-[3px]"
                alt="Vector"
                src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/vector-2.svg"
              />
            </div>

            <img
              className="absolute w-[1075px] h-px top-[-1382px] left-[140px]"
              alt="Vector"
              src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/vector-1.svg"
            />
          </div>

          {/* Card backgrounds */}
          <img
            className="w-[544px] top-0 left-[17px] absolute h-[357px]"
            alt="Subtract"
            src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/subtract.svg"
          />

          <img
            className="w-[535px] top-px left-[548px] absolute h-[357px]"
            alt="Subtract"
            src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/subtract-1.svg"
          />

          {/* Cryptocurrency cards */}
          {cryptoCards.map((card, index) => (
            <React.Fragment key={`crypto-${index}`}>
              {/* Coin icon */}
              <img
                className={`absolute w-[${index === 0 ? "62" : "162"}px] h-[${index === 0 ? "62" : "81"}px] top-[${index === 0 ? "45" : "31"}px] left-[${index === 0 ? "70" : "554"}px] object-cover`}
                alt={index === 0 ? "Ton symbol" : "Rectangle"}
                src={card.icon}
              />

              {/* Coin name */}
              <div
                className={`absolute h-[47px] top-[${index === 0 ? "53" : "50"}px] left-[${index === 0 ? "161" : "706"}px] ${card.textShadow} ${card.textGradient} [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Roboto',Helvetica] font-normal text-transparent text-[40px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
              >
                {card.name}
              </div>

              {/* Input field */}
              <div
                className={`top-32 ${card.inputLeft} absolute w-[260px] h-9 bg-[#ffffff11] rounded-[10px] shadow-[inset_1.34px_1.02px_4.62px_#ffffff20,inset_2.37px_1.79px_9.24px_#ffffff20,-2.05px_-1.55px_12px_-8px_#00000026,-12.3px_-9.3px_48px_-12px_#00000026] backdrop-blur-[7.58px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.58px)_brightness(100%)]`}
              >
                <Input className="h-full w-full bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0" />
              </div>

              {/* Stake button */}
              <div
                className={`absolute w-[198px] h-[49px] top-[${index === 0 ? "225" : "227"}px] ${card.buttonLeft} rounded-[100px] ${card.buttonShadow} ${card.buttonGradient}`}
              >
                <div
                  className={`absolute h-[38px] top-[${index === 0 ? "4" : "5"}px] left-[59px] [text-shadow:3.08px_-1.44px_12px_#00000026] [font-family:'Roboto',Helvetica] font-normal text-[#ffffff1a] text-[32px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
                >
                  Stake
                </div>
              </div>

              {/* Min/Max values */}
              <div
                className={`absolute h-3 ${card.minTop} ${card.minLeft} [font-family:'Roboto',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
              >
                {card.minValue}
              </div>

              <div
                className={`${card.maxTop} ${card.maxLeft} absolute h-3 [font-family:'Roboto',Helvetica] font-normal text-white text-[10px] text-center tracking-[0] leading-[normal] whitespace-nowrap`}
              >
                {card.maxValue}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Connect wallet button */}
        <Button className="absolute w-[280px] h-[57px] top-11 left-[761px] bg-[#2645d0] rounded-[50px] hover:bg-[#1e38a3] transition-colors">
          <div className="absolute w-[229px] h-[54px] top-0.5 left-[49px] [font-family:'Koulen',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-[normal]">
            connect WALLET
          </div>

          <img
            className="absolute w-[35px] h-[35px] top-[11px] left-[33px] object-cover"
            alt="Wallet"
            src="https://c.animaapp.com/mdf7ftsaFrvHrs/img/image-942.png"
          />
        </Button>

        {/* Balance text */}
        <div className="absolute h-[54px] top-[42px] left-[29px] [font-family:'Koulen',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-[normal]">
          balance:
        </div>
      </div>
    </div>
  );
};
