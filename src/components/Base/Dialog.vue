<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

const isOpen = ref(false);

const setIsOpen = (value: boolean) => (isOpen.value = value);
</script>

<template>
  <slot name="activator" :setIsOpen="setIsOpen"></slot>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" :open="isOpen" @close="setIsOpen">
      <div
        class="fixed inset-0 z-10 overflow-y-auto flex justify-center items-center"
      >
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-opacity-50 bg-black" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <div
            class="p-6 mx-auto overflow-hidden transition-all transform bg-true-gray-100 rounded-xl space-y-4"
          >
            <DialogTitle>
              <slot name="title"></slot>
            </DialogTitle>

            <DialogDescription>
              <slot name="description"></slot>
            </DialogDescription>

            <div>
              <slot :setIsOpen="setIsOpen"></slot>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
