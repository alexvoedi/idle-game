<script setup lang="ts">
import { useBaseStore } from "@/store/base";
import exportFromJSON from "export-from-json";
import pinia from "@/plugins/pinia";

const exportGame = () => {
  const data = toRaw(pinia.state.value);

  exportFromJSON({
    data,
    fileName: `save-${Date.now()}.json`,
    exportType: "json",
  });
};

const baseStore = useBaseStore();

const file = ref();
const fileInputForm = ref<HTMLFormElement>();

const loadFile = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (target.files) {
    file.value = target.files[0];
  }
};

const importGame = () => {
  let isExecuted = confirm(
    "Your current save game will be overwritten. Are you sure you want to load this save game?"
  );

  if (!isExecuted) return;

  const reader = new FileReader();

  reader.onload = (e: ProgressEvent<FileReader>) => {
    const { target } = e;

    if (target?.result) {
      const data = JSON.parse(target.result.toString());

      baseStore.loadGame(data);

      if (fileInputForm.value) {
        fileInputForm.value.reset();
      }
    }
  };

  reader.readAsText(file.value);
};
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-2xl">Game</h1>

    <div class="flex gap-8">
      <BaseCard class="px-8 py-6 space-y-6">
        <h2 class="text-xl">Export Game</h2>

        <button
          @click="exportGame"
          class="flex justify-center items-center gap-2"
        >
          <icon-mdi-export></icon-mdi-export>
          Export
        </button>
      </BaseCard>

      <BaseCard class="px-8 py-6 space-y-6">
        <h2 class="text-xl">Import Game</h2>

        <form ref="fileInputForm" class="space-y-4" action="">
          <input
            type="file"
            @change="loadFile"
            accept="application/JSON"
            ref="fileUpload"
          />

          <button
            :disabled="!file"
            @click="importGame"
            class="flex justify-center items-center gap-2 disabled:opacity-40"
          >
            <icon-mdi-import></icon-mdi-import>
            Import
          </button>
        </form>
      </BaseCard>
    </div>
  </div>
</template>

<style></style>
