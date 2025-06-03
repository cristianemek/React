import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroebyId dener de retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroebyId dener de retornar undefined si no existe id", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un arreglo de heroes", () => {
    //export const getHeroesByOwner = (owner) =>heroes.filter((heroe) => heroe.owner === owner);
  
    const heroesDc=getHeroesByOwner('DC');
    console.log(heroesDc)

    expect(heroesDc.length).toBe(3);
    expect(heroesDc).toEqual(
      [{ id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" }]
    );





});
});
