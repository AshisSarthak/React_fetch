import React from "react";
import { shallow } from "enzyme";
import HeaderEl from "./HeaderEl";

describe("HeaderEl Componnet", () => {
  it("default render with no back arrow", () => {
    const backClick = jest.fn();
    const userSearch = jest.fn();
    const wrapper = shallow(
      <HeaderEl
        showBackButton={false}
        handleBackClick={backClick}
        handleUserSearch={userSearch}
      />
    );
    expect(wrapper).toMatchSnapshot();

    const backArrow = wrapper.find("div.leftArrow");
    expect(backArrow.length).toBe(0);
  });

  it("default render with back arrow", () => {
    const backClick = jest.fn();
    const userSearch = jest.fn();
    const wrapper = shallow(
      <HeaderEl
        showBackButton={true}
        handleBackClick={backClick}
        handleUserSearch={userSearch}
      />
    );
    expect(wrapper).toMatchSnapshot();

    const backArrow = wrapper.find("div.leftArrow");
    expect(backArrow.length).toBe(1);

    const backBtn = wrapper.find("div.backBtn").at(0);
    backBtn.simulate("click");
    expect(backClick).toBeCalled();

    const inputEL = wrapper.find("input").at(0);
    inputEL.simulate("change", { currentTarget: { value: "newval" } });
    expect(userSearch).toBeCalledWith("newval");
  });
});
