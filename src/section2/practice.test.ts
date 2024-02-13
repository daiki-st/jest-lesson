import { ShoppingList } from "./practice";

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  it("addItemメソッドがアイテムをリストに追加できること", () => {
    shoppingList.addItem("Apple");
    shoppingList.addItem("Banana");
    expect(shoppingList.list).toEqual(["Apple", "Banana"]);
  });

  it("removeItemメソッドがアイテムをリストから削除できること", () => {
    shoppingList.addItem("Apple");
    shoppingList.addItem("Banana");
    shoppingList.removeItem("Banana");
    expect(shoppingList.list).toEqual(["Apple"]);
  });

  it("removeItemメソッドが存在しないアイテムの削除を試みたときにエラーをスローすること", () => {
    shoppingList.addItem("Apple");
    expect(() => shoppingList.removeItem("Banana")).toThrow(
      "アイテム: Banana は存在しません"
    );
  });
});
