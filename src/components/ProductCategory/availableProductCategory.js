//zx9 speaker
import desktopSpeaker0 from "../../Assets/category-speakers/desktop/image-zx9.jpg";
import tabletSpeaker0 from "../../Assets/category-speakers/tablet/image-zx9.jpg";
import mobileSpeaker0 from "../../Assets/category-speakers/mobile/image-zx9.jpg";

//zx9 speaker
import desktopSpeaker1 from "../../Assets/category-speakers/desktop/image-zx7.jpg";
import tabletSpeaker1 from "../../Assets/category-speakers/tablet/image-zx7.jpg";
import mobileSpeaker1 from "../../Assets/category-speakers/mobile/image-zx7.jpg";

//mark 11 headphones
import mobileHeadphone0 from "../../Assets/category-headphones/mobile/image-xx99-mark-two.jpg";
import tabletHeadphone0 from "../../Assets/category-headphones/tablet/image-xx99-mark-two.jpg";
import desktopHeadphone0 from "../../Assets/category-headphones/desktop/image-xx99-mark-two.jpg";

//mark 1 headphone
import mobileHeadphone1 from "../../Assets/category-headphones/mobile/image-xx99-mark-one.jpg";
import tabletHeadphone1 from "../../Assets/category-headphones/tablet/image-xx99-mark-one.jpg";
import desktopHeadphone1 from "../../Assets/category-headphones/desktop/image-xx99-mark-one.jpg";

//xx59 headphones
import mobileHeadphone2 from "../../Assets/category-headphones/mobile/image-xx59.jpg";
import tabletHeadphone2 from "../../Assets/category-headphones/tablet/image-xx59.jpg";
import desktopHeadphone2 from "../../Assets/category-headphones/desktop/image-xx59.jpg";

//earphopnes
import mobileEarphone from "../../Assets/category-earphones/mobile/image-yx1-earphones.jpg";
import tabletEarphone from "../../Assets/category-earphones/tablet/image-yx1-earphones.jpg";
import desktoEearphone from "../../Assets/category-earphones/desktop/image-yx1-earphones.jpg";

export const category = {
  speaker: [
    {
      category: "SPEAKERS",
      slug: "zx9-speaker",
      img: {
        desktop: desktopSpeaker0,
        tablet: tabletSpeaker0,
        mobile: mobileSpeaker0,
      },
      product: true,
      title: "ZX9 SPEAKERS",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      slug: "zx7-speaker",
      img: {
        desktop: desktopSpeaker1,
        tablet: tabletSpeaker1,
        mobile: mobileSpeaker1,
      },
      product: false,
      title: "ZX7 SPEAKERS",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
  ],

  headphone: [
    {
      category: "HEADPHONES",
      slug: "xx99-mark-two-headphones",
      img: {
        desktop: desktopHeadphone0,
        tablet: tabletHeadphone0,
        mobile: mobileHeadphone0,
      },
      product: true,
      title: "XX99 MARK II HEADPHONES",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      slug: "xx99-mark-one-headphones",
      img: {
        desktop: desktopHeadphone1,
        tablet: tabletHeadphone1,
        mobile: mobileHeadphone1,
      },
      product: false,
      title: "XX99 MARK I HEADPHONES",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      slug: "xx59-headphones",
      img: {
        desktop: desktopHeadphone2,
        tablet: tabletHeadphone2,
        mobile: mobileHeadphone2,
      },
      product: false,
      title: "XX59 HEADPHONES",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
  ],

  earphone: [
    {
      category: "EARPHONES",
      slug: "yx1-earphones",
      img: {
        desktop: desktoEearphone,
        tablet: tabletEarphone,
        mobile: mobileEarphone,
      },
      product: true,
      title: "YX1 WIRELESS EARPHONES",
      description:
        "STailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  ],
};
