import Image from "next/image"
import AltairaClubHeroImage from "../../../public/images/altairaClub/AltairaClubHeroImage.webp"

const Hero = () => {
  return (
    <div className="min-h-screen w-full">
        <div className="relative">
        <Image src={AltairaClubHeroImage} alt="altaira club" className="w-full h-full object-cover"/>
        <div className="absolute flex flex-col gap-5">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-cormorant">Access Is Rare. Alignment Is Essential</h2>
            <p className="text-white italic text-lg md:text-xl lg:text-2xl">Welcome to Altaira Summit Club - a private members collective where luxury living meets privileged access.</p>
        </div>
        </div>
    </div>
  )
}

export default Hero