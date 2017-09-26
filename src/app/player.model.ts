export class Player {
  public hp: number = 100;
  public weapons: string[] = ['Short Sword'];
  public armor: string[] = ['Leather Armor'];
  public gp: number = 15;
  public xp: number = 0;
  public attack: number = 5;
  public defense: number = 5;

  constructor(public name: string) {}
}
