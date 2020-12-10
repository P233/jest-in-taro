import HomePage from "./index.jsx";

describe("<HomePage />", () => {
  it("shallow HomePage", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("mount HomePage", () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.find(".index").text()).toBe("Hello world!");
  });

  it("render HomePage", () => {
    const wrapper = mount(<HomePage />);
    expect(wrapper.find(".index").text()).toBe("Hello world!");
  });
});
