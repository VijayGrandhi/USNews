import React from "react";
import NavBar from "./NavBar";
import renderer from "react-test-renderer";

it("matches snapshot", () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
})