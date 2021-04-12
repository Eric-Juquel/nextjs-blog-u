import Image from 'next/image';

import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Moi2.JPG"
          alt="An Image showing Eric"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Eric</h1>
      <p>
        I blog about development - especially frontend frameworks like React.
      </p>
    </section>
  );
};

export default Hero;
