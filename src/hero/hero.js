import heroImage from "../assets/images/avatar-miron-vitold.png"
const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={heroImage}  // Remplace par l'URL de ta photo
        alt="Profile"
        className="rounded-md w-56 h-56 object-cover shadow-lg hover:shadow-2xl"
      />
    </div>
  );
}

export default Hero;