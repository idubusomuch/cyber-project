export default function GridBanner({
  productImg,
  title,
  titleBold,
  description,
  bgColor = 'bg-white',
  textColor = 'text-black',
}) {
  return (
    <div
      className={`${bgColor} ${textColor} w-full h-full px-4 py-14 text-center flex flex-col items-center lg:grid lg:grid-cols-2 lg:content-center lg:justify-between lg:text-left lg:px-0`}
    >
      <img
        src={productImg}
        alt="mobile img"
        className="m-auto max-w-[60%] max-h-[400px] pb-6 lg:hidden lg:h-full"
      />
      <div className="hidden lg:block overflow-hidden pr-6">
        <img
          src={productImg}
          alt="pc img"
          className="h-[300px] w-[340px] object-right object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 items-center lg:pr-5 lg:items-start">
        <h2 className={`text-[3em] lg:text-[2em] 2xl:text-[2.5em]`}>
          {title} <b>{titleBold}</b>
        </h2>
        <p className="text-[#909090]">{description}</p>
      </div>
    </div>
  );
}
