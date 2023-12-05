import React from "react";
import { shallow } from "enzyme";
import NAv from "./NAv";

describe("NAv", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NAv />);
    expect(wrapper).toMatchSnapshot();
  });
});
