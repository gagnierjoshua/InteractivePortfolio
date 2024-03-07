/*next type animation */
/*https://www.npmjs.com/package/react-type-animation */

import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Teacher',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mentor',
        1000,
        'Software Engineer',
        1000,
        'Game Designer',
        1000,
        'Embedded Engineer',
        1000,
        'Learner',
      ]}
      speed ={50}
      className="text-[2rem] md:text-[3-rem] text-green-400 font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;