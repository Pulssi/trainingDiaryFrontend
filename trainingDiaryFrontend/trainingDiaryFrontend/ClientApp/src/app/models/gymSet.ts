import { GymMove } from "./GymMove";

export class GymSet {
  idGymSet: number;
  idGymMove: number;
  idPerson: number;
  repetitions: number;
  setWeight: number;
  timestamp: Date;
  gymMoveNavigation: GymMove;
}
