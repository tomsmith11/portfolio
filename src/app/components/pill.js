import Image from "next/image";

const Pill = ({ src, alt, text }) => {
  return (
    <div className="rounded-full w-34 h-10 p-10 flex flex-row hover:shadow-xl">
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        className="rounded-full"
      />
      <p className="ml-2">{text}</p>
    </div>
  );
};

export default Pill;
