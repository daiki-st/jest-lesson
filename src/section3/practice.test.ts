import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Usersクラスのテスト", () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it("allメソッドがユーザーデータを返す", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
      ],
    });

    const users = await Users.all();

    expect(users).toEqual([
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ]);
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
  });

  // テストケース2: エラーが発生した場合
  // このようなテストも追加すると良いでしょう
});
