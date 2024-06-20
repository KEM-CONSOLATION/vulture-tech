const Stats = () => {
  return (
    <div
      className=" bg-[#B9F4E2] flex items-center justify-center gap-[20px] md:gap-[44px] text-center py-[18px]"
      data-aos="fade-down"
    >
      <div className=" text-[#061C60]">
        <p className=" text-[24px] font-[600]">600+</p>
        <p className=" text-[16px] font-[400]">Satisfied clients</p>
      </div>
      <div className=" text-[#061C60]">
        <p className=" text-[24px] font-[600]">800+</p>
        <p className=" text-[16px] font-[400]">Successful projects</p>
      </div>{" "}
      <div className=" text-[#061C60]">
        <p className=" text-[24px] font-[600]">200+</p>
        <p className=" text-[16px] font-[400]">Positive reviews </p>
      </div>
    </div>
  );
};

export default Stats;
