/**
 * 【演習】
 * 以下のUsersクラスのテストを作成してください
 *
 * 【ヒント】
 * 1. jest.mockを使用してaxiosをモック化します
 * 2. mockResolvedValueまたはmockImplementationを使用して、
 * 　　モック化したaxios.getが期待した結果を返すように設定します
 */
import axios from "axios";

class Users {
  static async all() {
    try {
      const resp = await axios.get("/users.json");
      return resp.data;
    } catch (error: any) {
      if (error.response) {
        // サーバーからのレスポンスがある場合、そのステータスコードとデータを処理する
        console.error("Server responded with an error:", error.response.status);
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        // サーバーにリクエストが送信されたが、レスポンスがない場合
        console.error("No response received from server.");
      } else {
        // リクエストを送信する際にエラーが発生した場合
        console.error("Error sending request:", error.message);
      }
      throw error; // エラーを再度スローして呼び出し元に伝播させる
    }
  }
}

export default Users;
