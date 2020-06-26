import React from "react";
import { shallow, mount } from "enzyme";
import { PostContainer } from "./PostContainer";
import { PostItem } from "../PostList/PostList";
import fetchMock from "jest-fetch-mock";
import { demoComment } from "./Comment/Comment.test";
import { UserDetails } from "../User/User";

const demoPost: PostItem = {
  body: "demo",
  id: 1,
  title: "demo",
  userId: 11,
};

const demoUser: UserDetails = {
  id: 1,
  name: "demo",
  username: "demo",
  email: "demo",
  address: {
    street: "demo",
    suite: "demo",
    city: "demo",
    zipcode: "demo",
    geo: {
      lat: "demo",
      lng: "demo",
    },
  },
  phone: "demo",
  website: "demo",
  company: {
    name: "demo",
    catchPhrase: "demo",
    bs: "demo",
  },
};

describe("PostContainer Componnet", () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it("default render", () => {
    const wrapper = shallow(<PostContainer post={demoPost} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("loads certain post", () => {
    const comments = [demoComment];
    fetchMock.mockOnce(JSON.stringify(comments));
    fetchMock.mockOnce(JSON.stringify(demoUser));
    const wrapper = mount(<PostContainer post={demoPost} />);
    expect(wrapper).toMatchSnapshot();
  });
});
