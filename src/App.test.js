import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow");

const episodesData = [
  {
    id: 2993,
  },
];

test("if it can make an API call", () => {
  mockFetchShow.mockResolvedValue(episodesData);
});
