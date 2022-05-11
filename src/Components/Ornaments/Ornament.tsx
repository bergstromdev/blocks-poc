import { NorthStar } from "./NorthStar";
import { StarField } from "./StarField";
import { LongDiamond } from "./LongDiamond";
import { SunBurst } from "./SunBurst";
import { Diamond } from "./Diamond";
import { Orbital } from "./Orbital";
import { ShootingStar } from "./ShootingStar";

type Props = {
  variant?: App.Ornament;
};
export const Ornament = ({ variant }: Props) => {
  switch (variant) {
    case "NorthStar":
      return <NorthStar />;
    case "StarField":
      return <StarField />;
    case "LongDiamond":
      return <LongDiamond />;
    case "SunBurst":
      return <SunBurst />;
    case "Diamond":
      return <Diamond />;
    case "Orbital":
      return <Orbital />;
    case "ShootingStar":
      return <ShootingStar />;
    default:
      return null;
  }
};
