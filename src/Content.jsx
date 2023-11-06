import { PetsIndex } from "./PetsIndex";
import { PetsNew } from "./PetsNew";

export function Content() {
  let pets = [
    {
      id: 1,
      name: "Bear",
      breed: "German Shepherd",
      age: 2,
      image: "https://highlandcanine.com/wp-content/uploads/2020/12/iStock-926735822.jpg",
    },
    {
      id: 2,
      name: "Bailey",
      breed: "German Shepherd",
      age: 6,
      image: "https://www.ellevetsciences.com/wp-content/uploads/2023/05/German-Shepherd-1.jpg",
    },
    {
      id: 3,
      name: "Blue",
      breed: "German Shepherd",
      age: 1,
      image:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_770,h_513/https://puppyintraining.com/wp-content/uploads/german-shepherd-growth-chart-770x513.jpg",
    },
  ];
  return (
    <div>
      <PetsNew />
      <PetsIndex pets={pets} />
    </div>
  );
}
