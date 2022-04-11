import React from "react";
import renderer from "react-test-renderer";
import MainCard from "./MainCard";

it("matches snapshot", () => {
    const tree = renderer.create(<MainCard title="Title1" subtitle="Subtitle1" />).toJSON();
    expect(tree).toMatchSnapshot();
})