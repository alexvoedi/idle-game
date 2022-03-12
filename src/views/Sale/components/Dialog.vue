<script setup lang="ts">
import Item from "@/interfaces/items/Item";
import SaleRule from "@/data/sales/SaleRule";
import { useSaleStore } from "@/store/sale";
import { useItem } from "@/composables/useItem";
import BaseSale from "@/interfaces/sales/BaseSale";
import Sale from "@/interfaces/sales/Sale";

interface ComponentProps {
  item: Item;
}

const props = defineProps<ComponentProps>();

const saleStore = useSaleStore();
const { getItem } = useItem();

const availableSales = [
  {
    itemID: props.item.id,
    rule: SaleRule.SellUntil,
    stock: 0,
    active: false,
  },
];

const activeSales = saleStore.getSales(props.item.id);

availableSales.forEach((availableSale) => {
  const activeSale = activeSales.find(
    (activeSale) => availableSale.itemID === activeSale.itemID
  );

  if (activeSale) {
    Object.assign(availableSale, activeSale);
  }
});

const rules = reactive<Sale[]>(availableSales);

const saveRules = () => {
  rules.forEach((rule) => {
    const ruleIsActive = saleStore.sales.some(
      (sale) => sale.itemID === props.item.id && sale.rule === rule.rule
    );

    const saleIndex = saleStore.sales.findIndex(
      (sale) => sale.itemID === props.item.id && sale.rule === rule.rule
    );

    if (rule.active) {
      if (ruleIsActive) {
        saleStore.sales.splice(saleIndex, 1, { ...rule });
      } else {
        saleStore.sales.push({ ...rule });
      }
    } else {
      if (ruleIsActive) {
        saleStore.sales.splice(saleIndex, 1);
      }
    }
  });
};
</script>

<template>
  <BaseDialog>
    <template #activator="{ setIsOpen }">
      <BaseButton @click="setIsOpen(true)" class="hover:text-indigo-400">
        <template #icon>
          <icon-mdi-cog></icon-mdi-cog>
        </template>
      </BaseButton>
    </template>

    <template #title>
      <h1 class="text-2xl">{{ getItem(item.id).name }} Selling</h1>
    </template>

    <template #description></template>

    <template #default="{ setIsOpen }">
      <form
        class="space-y-4"
        @keypress.enter.prevent="
          saveRules();
          setIsOpen(false);
        "
      >
        <div
          v-for="(rule, index) in rules"
          :key="index"
          class="flex items-center gap-4"
        >
          Sell items until there are
          <input
            type="number"
            min="0"
            step="1"
            pattern="\d*"
            v-model="rule.stock"
          />

          <input type="checkbox" v-model="rule.active" />
        </div>

        <div class="flex justify-between">
          <BaseButton
            @click="setIsOpen(false)"
            class="text-indigo-600"
            hover="bg-indigo-100"
          >
            Close
          </BaseButton>

          <BaseButton
            type="submit"
            class="text-white bg-indigo-600"
            hover="bg-indigo-500"
            @click.prevent="
              saveRules();
              setIsOpen(false);
            "
          >
            Save
          </BaseButton>
        </div>
      </form>
    </template>
  </BaseDialog>
</template>

<style></style>
