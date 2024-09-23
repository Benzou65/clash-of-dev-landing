import type { Props } from "../components/Section.astro";

import section1Img from "../images/section1.png";
import section2Img from "../images/section2.png";
import section3Img from "../images/section3.png";
import section4Img from "../images/section4.png";
import section5Img from "../images/section5.png";
import section6Img from "../images/section6.png";

import section1Sticker from "../images/sticker1.svg";
import section2Sticker from "../images/sticker2.svg";
import section3Sticker from "../images/sticker3.svg";
import section4Sticker from "../images/sticker4.svg";
import section5Sticker from "../images/sticker5.svg";
import section6Sticker from "../images/sticker6.svg";

export const sections: Props[] = [
  {
    title: "L'artiste de renom",
    subtitle: "Design",
    points: 6,
    content: [
      "<strong>Le design</strong> c’est son terrain de jeu. Il maîtrise et retranscrit correctement chaque pixel de la maquette.",
      "Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou de border-radius ; <strong>Figma n’a aucun secret pour ce Dev de talent</strong>.",
    ],
    image: section1Img,
    alt: "",
    backgroundColor: "#EBEDFF",
    sticker: section1Sticker,
    comment: [
      {
        author: "maislina_",
        backgroundColor: "#9FA8FE",
        borderColor: "#8A92E3",
        arrowDirection: "left",
      },
    ],
  },
  {
    title: "LE BÂTISSEUR DE CODE",
    subtitle: "Code",
    points: 6,
    content: [
      "Ses lignes de code sont des fondations solides. C’est <strong>un maître du front</strong>, capable de structurer les systèmes les plus complexes sans se casser la tête.",
      "<strong>Maitre de VSCode</strong>G, il a surement fini le challenge en s’assurant d’avoir le code le plus clair et le plus propre des 36 participants.",
    ],
    image: section2Img,
    alt: "",
    backgroundColor: "#FFEDF5",
    sticker: section2Sticker,
    comment: [
      {
        author: "Chris",
        backgroundColor: "#F588B9",
        borderColor: "#D6699A",
        arrowDirection: "left",
      },
    ],
  },
  {
    title: "LE MAITRE DE LA FLUIDITÉ",
    subtitle: "Motion",
    points: 3,
    content: [
      "Aucun composant ne s’affiche sans une <strong>animation soignée</strong>. Ses transitions sont légères, dynamiques et fluides, captivant l'utilisateur à chaque interaction.",
      "Ce dev a l’oeil et maitrise <strong>le motion</strong> mieux que n’importe qui.  ",
    ],
    image: section3Img,
    alt: "",
    backgroundColor: "#ECFFCE",
    sticker: section3Sticker,
    comment: [
      {
        author: "Lina",
        backgroundColor: "#A2B87E",
        borderColor: "#95AE6D",
        arrowDirection: "left",
      },
      {
        author: "Chris",
        backgroundColor: "#A2B87E",
        borderColor: "#95AE6D",
        arrowDirection: "left",
      },
    ],
  },
  {
    title: "LE CHERCHEUR DE BREAKPOINT",
    subtitle: "Responsive",
    points: 2,
    content: [
      "Quelle que soit la taille de l’écran, il garantit une expérience utilisateur sans faille. Chaque site <strong>s’adapte à tous les supports</strong>, du mobile au grand écran.",
      "Il fait attention à <strong>chaque breakpoint</strong> attentivement, on ne pourra pas le reprendre à l’inspection!",
    ],
    image: section4Img,
    alt: "",
    backgroundColor: "#BADAFF",
    sticker: section4Sticker,
    comment: [
      {
        author: "Lina",
        backgroundColor: "#6B93C0",
        borderColor: "#6B93C0",
        arrowDirection: "left",
      },
      {
        author: "Chris",
        backgroundColor: "#6B93C0",
        borderColor: "#6B93C0",
        arrowDirection: "left",
      },
    ],
  },
  {
    title: "LE MAITRE DES SECRETS",
    subtitle: "Easter egg",
    points: 3,
    content: [
      "Derrière une ligne de code bien choisie se cache un <strong>secret bien gardé</strong>. Il glisse la surprise qui surprendra les utilisateurs les plus curieux.",
      "Dev attentif aux comportements utilisateurs il saura cacher l’<strong>Easter Egg</strong> au meilleur endroit.",
    ],
    image: section5Img,
    alt: "",
    backgroundColor: "#FFFAC2",
    sticker: section5Sticker,
    comment: [
      {
        author: "Lina",
        backgroundColor: "#CAC48E",
        borderColor: "#C2BB82",
        arrowDirection: "left",
      },
      {
        author: "Chris",
        backgroundColor: "#CAC48E",
        borderColor: "#C2BB82",
        arrowDirection: "left",
      },
    ],
  },
  {
    title: "LE SUR-BOOSTED",
    subtitle: "Big Boss",
    points: "infinite",
    content: [
      "Il excelle dans tous les domaines, alliant design, propreté de code, réactivité, animations fluides et créativité cachée. <strong>Un vrai prodige</strong> qui a su briller dans chaque aspect du développement.",
      "Ce dev aux <strong>multitalents</strong> a reçu la standing ovation du jury.  ",
    ],
    image: section6Img,
    alt: "",
    backgroundColor: "#FFE6B3",
    sticker: section6Sticker,
    comment: [
      {
        author: "Lina",
        backgroundColor: "#F28164",
        borderColor: "#D46F55",
        arrowDirection: "left",
      },
      {
        author: "Chris",
        backgroundColor: "#F28164",
        borderColor: "#D46F55",
        arrowDirection: "left",
      },
    ],
  },
];
