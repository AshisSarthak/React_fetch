import React from "react";
import { shallow } from "enzyme";
import { Comment } from "./Comment";
import { PostComment } from "../PostContainer";

export const demoComment: PostComment = {
  body: "demo",
  email: "abc@demo.com",
  id: 1,
  name: "demo",
  postid: 11,
};

describe("Comment Componnet", () => {
  it("default render", () => {
    const wrapper = shallow(<Comment item={demoComment} />);
    expect(wrapper).toMatchSnapshot();
  });
});
