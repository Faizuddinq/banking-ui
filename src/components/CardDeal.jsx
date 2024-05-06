import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        
        Ut incidunt accusantium dolorem exercitationem ab atque, corrupti nam? Nisi dicta repellat est quo, dolores quidem excepturi quis omnis non voluptatum ipsum esse! Dolore minima mollitia nobis! Possimus, totam suscipit.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card_deal" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;