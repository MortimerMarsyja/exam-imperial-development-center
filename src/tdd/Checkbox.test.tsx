import Card from "@components/Card";
import { render } from "@testing-library/react";

describe("Card", () => {
  it("renders without crashing", () => {
    render(
      <Card>
        <p>test not to crush</p>
      </Card>
    );
  });
});
