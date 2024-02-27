import axios from "axios";
import Users from "./practice";

jest.mock("axios");

describe("Usersクラスのテスト", () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
    expect(axios.get).toHaveBeenCalledWith("/users.json");
  });

  it("allメソッドがエラーを投げる", async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error("Network error"));
    await expect(Users.all()).rejects.toThrow("Network error");
  });
});
