import React from "react";
import { shallow } from "enzyme";
import ListaPokemon from "./ListaPokemon";

describe("ListaPokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListaPokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
