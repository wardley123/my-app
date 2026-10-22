import Navbar from "../components/navbar";
import Image from "next/image";
import greyParrot from "../unit1-image.jpg";
import "./unit1.css";

export default function UnitOne() {
  return (
    <>
      <Navbar />

      <main className="unit-page">
        <section className="unit-content">
          <Image
            src={greyParrot}
            alt="African grey parrot perched on a branch"
            width={400}
            height={200}
            priority
            className="parrot-image"
          />

          <h1>Unit 1: African Grey Parrot</h1>

          <p>
           
	Parrots have been kept in cages since ancient times, and they’ve been a great source of entertainment, showing off their affection and intelligence. What makes them stand out most is their ability to mimic sounds, including human speech. The Grey Parrot is a breed of parrot that is capable of memorizing up to 1000 words and can live for up to 80 years. They are native to many African countries, including Congo, Ghana, Uganda, and Ivory Coast.

          </p>
        </section>

       {/* BELOW: Video on left, nutrition on right */}
  <section className="nutrition-layout">

    <div className="video-section">
      <video
        className="parrot-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/Unit1vid.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <div className="diet-section">
      <h2>How It Works: Nutrition</h2>

      <p>
       The grey parrot diet usually consists of fruits, leaves, bark, and veggies such as arugula, watercress, kale, and sprouts.
        African grey parrots are prone to calcium deficiency because their species requires more calcium for their dense bones. 
        That's why they can’t just have a seed-based diet; seeds are low in calcium, and they get their calcium from the veggies mentioned above. 
        Additionally, parrots should get vitamin D, since it helps the intestine absorb calcium. They also eat small insects like ants, termites, and caterpillars for a source of protein. 
         They may also eat insects such as ants, termites, and caterpillars for protein.
      </p>



      <h3>Diet Overview</h3>

      <ul>
        <li>60–70% — High-quality pellets</li>
        <li>20–25% — Fresh greens and vegetables</li>
        <li>5–10% — Nuts, seeds, and healthy fats</li>
        <li>5–10% — Fruit</li>
      </ul>
    </div>


  </section>
</main>


  <div className="calcium-container">
  <div className="Calcium-zoomIn">
  <h2>Calcium Zoom In</h2>

  <p className="calcium-intro">
    When we zoom into the cellular level, we can analyze the
    processes that keep our parrot's body functioning. Food
    provides nutrients that are broken down and used for energy,
    growth, and maintaining healthy bones.
  </p>

  <div className="nutrient-grid">
    <div className="nutrient-card">
      <h3>Carbohydrates</h3>
      <p>Carbohydrates are broken down into glucose.</p>
    </div>

    <div className="nutrient-card">
      <h3>Cellular Respiration</h3>
      <p>Cells use glucose to produce ATP, their usable energy source.</p>
    </div>

    <div className="nutrient-card">
      <h3>Proteins</h3>
      <p>Proteins are broken down into amino acids for growth and repair.</p>
    </div>

    <div className="nutrient-card">
      <h3>Minerals</h3>
      <p>Calcium supports strong bones, muscle function, and other cellular processes.</p>
    </div>
  </div>

  <div className="calcium-note">
    <h3>Why Calcium is Different</h3>
    <p>
      The Calcium aspect of this is the unique part. Unlike other minerals, once it enters the small intestine, vitamin D3 stimulates the intestinal calcium-binding protein, allowing calcium to be absorbed into the bloodstream. Inside the cell, a protein called calbindin moves calcium throughout the cell. Once in the bloodstream, it gets transported to other tissues like the bone. The body regulates this by a process called calcium homeostasis, since high levels of calcium can be dangerous 
    </p>
  </div>
  </div>
</div>
    </>
  );
}




