import React from "react";
// import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/react";
import App from "./App";
import { fectShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

const episodesData = [
  {
    id: 2993,
  },
];

test("if it can make an API call", () => {
  mockFetchShow.mockResolvedValue(episodesData);
});
