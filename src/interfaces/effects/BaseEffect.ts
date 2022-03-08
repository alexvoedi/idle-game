import EffectID from "@/data/effects/EffectID";
import ScienceID from "../../data/sciences/ScienceID";

export default interface BaseEffect {
  id: EffectID;
  name: string;
  requirements: {
    sciences: ScienceID[];
  };
}
