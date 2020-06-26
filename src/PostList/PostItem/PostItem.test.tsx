import React from "react";
import { shallow } from "enzyme";
import fetchMock from "jest-fetch-mock";
import PostItemEl from "./PostItem";
import { PostItem } from "../PostList";

const demoPost: PostItem = {
  body: "demo",
  id: 1,
  title: "demo",
  userId: 11,
};

describe("PostItem Componnet", () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it("default render", () => {
    const selectuserMock = jest.fn();
    const selectPostMock = jest.fn();
    const wrapper = shallow(
      <PostItemEl
        item={demoPost}
        selectPost={selectPostMock}
        selectUser={selectuserMock}
      />
    );
    expect(wrapper).toMatchSnapshot();

    const contentEl = wrapper.find("div.content");
    contentEl.simulate("click");
    expect(selectPostMock).toBeCalledWith(demoPost);
  });
});
