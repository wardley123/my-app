"use client"
import "../styles/app.css"
import Navbar from "./components/navbar"
import { useRouter } from "next/navigation"


export default function Home() {


  const router = useRouter
  return (
    <>
    <Navbar/>
    <div className="homepage">
      

    <main className="hero">
      {/* Left side: Parrot video */}
      <div className="hero-video">
        <video
          className="parrot-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/videos/GreyParrotHomeVid.mp4"
            type="video/mp4"
          />
          Your browser does not support video.
        </video>
      </div>

      {/* Right side: Title */}
      <div className="hero-text">
        <h1> African Grey Parrot</h1>
        <p>Wardley Lervandal's General Biology semester project</p>
      </div>
    </main>
    </div>
    </>
  );
}
