import React from "react";
import { shallow } from "enzyme";
import { Avatar } from "./Avatar";

describe("Avatar Componnet", () => {
  it("default render", () => {
    const selectUserFunction = jest.fn();
    const wrapper = shallow(
      <Avatar name={"Ashis Sarthak"} selectUser={selectUserFunction} />
    );
    expect(wrapper).toMatchSnapshot();
    const innerDiv = wrapper.find("div").at(0);
    expect(innerDiv.text()).toBe("AS");
    innerDiv.simulate("click");
    expect(selectUserFunction).toBeCalled();
  });
});
