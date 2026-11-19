
import Navbar from "../components/navbar";
import Image from "next/image";
import "./unit2.css";

export default function UnitTwoPage() {
  return (
    <>
      <Navbar />

      <main className="unit-content">
        <h1 className="unit-title">
         Genetic Variation, and Mutation
        </h1>

        {/* Red/Pink Feathers */}
        <section className="mutation-row">
          <Image
            src="/images/pink-feathers.jpg"
            alt="African grey parrot with red or pink feathers"
            width={250}
            height={200}
            className="mutation-image"
          />

          <div className="mutation-text">
            <h2>Red/Pink Feathers</h2>
            <p>
               Usually, the African Grey parrot produces grey feathers due to melanin pigmentation. 
               The mutation affects the bird's pigmentation, allowing red and pink feathers to grow alongside the standard grey feathers. 
               There can be plenty of reasons why they appear pink/red; not all of them are genetic, 
               but the gene that is responsible for this discoloration has not been conclusively identified. 
               Others also point out that the red/pink feathers are caused by liver disease and nutritional imbalance.

            </p>
          </div>
        </section>

        {/* Grizzles */}
        <section className="mutation-row">
          <Image
            src="/images/grizzles.jpg"
            alt="Grey parrot with grizzle feather mutation"
            width={250}
            height={200}
            className="mutation-image"
          />

          <div className="mutation-text">
            <h2>Grizzles</h2>
            <p>
              Unlike red and pink feathers, grizzles are patches of
              red/pink feathers that appear on the parrot and not the
              whole feather. But the inheritance pattern and molecular
              mechanism of the grizzle mutation have not been reliably
              established.
            </p>
          </div>
        </section>

        {/* Albino */}
        <section className="mutation-row">
          <Image
            src="/images/albino.jpg"
            alt="Albino grey parrot"
            width={250}
            height={240}
            className="mutation-image"
          />

          <div className="mutation-text">
            <h2>Albino</h2>
            <p>
              In an albino parrot, the feathers appear purely white
              instead of the grey they normally have. This mutation
              is caused by a recessive gene that blocks melanin
              production. The effects of albinism include, reuduced vison and sensitivity to light.
              If we zoom if further the enzyme tyrosinase is responsible for melanin production can be affected by genetic changes which can affect melanin production.
            </p>
          </div>
        </section>

        <section>
        <h1 className="Growth-section">
          Growth
        </h1>
        </section>
      </main>
    </>
  );
}
