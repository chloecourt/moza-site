import Image from "next/image";
export default function MozaLogo() {
  return (
    <div className=" flex flex-row justify-center">
      <div className="">
        <Image
          src="/images/mozaLogo.png"
          width={128}
          height={43}
          alt="moza logo"
        />
      </div>
      {/* <h3 className="hidden self-end text-sm text-orange-400 md:block lg:block">
        creative solutions to your digital needs
      </h3> */}
    </div>
  );
}
