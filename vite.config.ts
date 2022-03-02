import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/vite-plugin-vue-i18n";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";
import PurgeIcons from "vite-plugin-purge-icons";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
    },
  },
  plugins: [
    Vue(),

    Components({
      dts: true,
      deep: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/],
      globalNamespaces: ["views", "components"],
      dirs: ["src/views", "src/components", "src/layouts"],
      resolvers: [
        IconsResolver({
          componentPrefix: "icon",
        }),
      ],
    }),

    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        "@vueuse/core",
        "@vueuse/head",
        "pinia",
        "vue",
        "vue-i18n",
        "vue-router",
      ],
      eslintrc: {
        enabled: true,
      },
    }),

    Icons(),
    PurgeIcons(),

    WindiCSS(),

    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "i18n/**")],
    }),
  ],

  server: {
    port: 8080,
    open: true,
    fs: {
      strict: true,
    },
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core"],
  },
});
