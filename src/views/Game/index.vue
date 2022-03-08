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
  <div class="space-y-8 max-w-screen-md mx-auto">
    <h1 class="text-2xl font-semibold flex items-center gap-4">
      <icon-mdi-cog></icon-mdi-cog>
      <span>Game</span>
    </h1>

    <div class="grid grid-cols-1 gap-8">
      <BaseCard class="px-8 py-6 space-y-6">
        <h2 class="text-xl">Export Game</h2>

        <p>Export and download the game to your computer.</p>

        <div class="flex justify-end">
          <BaseButton
            @click="exportGame"
            class="bg-indigo-600 text-white"
            not-disabled:hover="bg-indigo-500"
          >
            <template #icon>
              <icon-mdi-export></icon-mdi-export>
            </template>
            Export
          </BaseButton>
        </div>
      </BaseCard>

      <BaseCard class="px-8 py-6 space-y-6">
        <h2 class="text-xl">Import Game</h2>

        <form ref="fileInputForm" class="space-y-4" action="">
          <p>
            Load an exported game from you local computer. The current game data
            will be overwritten. This action cannot be undone!
          </p>

          <input
            type="file"
            @change="loadFile"
            accept="application/JSON"
            ref="fileUpload"
          />

          <div class="flex justify-end">
            <BaseButton
              @click="importGame"
              :disabled="!file"
              class="bg-red-700 text-white"
              not-disabled:hover="bg-red-600"
            >
              <template #icon>
                <icon-mdi-import></icon-mdi-import>
              </template>
              <span>Import</span>
            </BaseButton>
          </div>
        </form>
      </BaseCard>

      <BaseCard class="px-8 py-6 space-y-6">
        <h2 class="text-2xl font-semibold">Restart Game</h2>

        <p>All game data will be lost. This action cannot be undone!</p>

        <div class="flex justify-end">
          <BaseButton
            @click="baseStore.resetGame"
            class="bg-red-700 text-white"
            not-disabled:hover="bg-red-600"
          >
            <template #icon>
              <icon-mdi-delete></icon-mdi-delete>
            </template>
            Restart
          </BaseButton>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<style></style>
