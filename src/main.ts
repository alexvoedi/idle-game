import routes from "./routes";

import i18n from "./plugins/i18n";
import pinia from "./plugins/pinia";

import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";

const app = createApp(App);

const head = createHead();

import "virtual:windi-base.css";
import "virtual:windi-components.css";
import "virtual:windi-utilities.css";
import "virtual:windi-devtools";

import "@iconify/iconify";
import "@purge-icons/generated";

app.use(routes);
app.use(pinia);
app.use(head);
app.use(i18n);

app.mount("#app");
