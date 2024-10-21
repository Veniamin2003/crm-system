<script setup lang="ts">
// import {ICard, IColumn} from "~/components/kanban/kanban.types";
import {useKanbanQuery} from "~/components/kanban/useKanbanQuery";

useSeoMeta({
	title: "Home | SRM System"
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

useKanbanQuery()
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">CRM System by Veniamin Petrov</h1>
		<div>
			<UiCard class="mb-3" draggable="true">
				<UiCardHeader role="button">Name card</UiCardHeader>
				<UiCardContent>Company</UiCardContent>
				<UiCardFooter>Date</UiCardFooter>
			</UiCard>
		</div>
	</div>
</template>
