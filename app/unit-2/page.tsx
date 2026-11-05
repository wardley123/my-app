import Navbar from "../components/navbar";
import Image from "next/image";
import "./unit2.css";

export default function UnitTwoPage() {
  return (
    <>
      <Navbar />
      <main className="unit-content">
  {/* Left side: Three images */}
  <div className="images-container">
    <Image
      src="/images/pink-feathers.jpg"
      alt="Pink feathers"
      width={250}
      height={200}
      className="mutation-image"
    />

    <Image
      src="/images/grizzles.jpg"
      alt="Grey parrot genetic mutation"
      width={250}
      height={200}
      className="mutation-image"
    />

    <Image
      src="/images/albino.jpg"
      alt="Albino grey parrot"
      width={250}
      height={240}
      className="mutation-image"
    />
  </div>

  {/* Right side: Text */}
  <div className="text-container">
    <h1 className="unit-title">
      Growth, Genetic Variation, and Mutation
    </h1>
  </div>
</main>
    </>
  );
}
