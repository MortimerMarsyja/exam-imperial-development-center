import { render } from "@testing-library/react";
import BottomControls from "./BottomControls";

describe("BottomControls", () => {
  it("renders without crashing", () => {
    render(
      <BottomControls width={120} height={30}>
        <p>test not to crush</p>
      </BottomControls>
    );
  });
});
