// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@sidebase/nuxt-auth"],

  auth: {
    baseURL: process.env.CMS_URL + "/",
    provider: {
      type: "local",
      endpoints: {
        signIn: { path: "user/login?_format=json", method: "post" },
        signOut: { path: "user/logout", method: "get" },
        signUp: undefined,
        getSession: {
          path: "session/token",
          method: "get",
        },
      },
      token: {
        signInResponseTokenPointer: "/csrf_token", // トークンの取得元を設定
        type: "Bearer", // トークンの種類（一般的にBearerを使用）
        headerName: "X-CSRF-Token", // ヘッダーにトークンを設定
        maxAgeInSeconds: 3600, // トークンの有効期限（1時間）
      },
    },
  },
});
