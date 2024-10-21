import {useQuery} from "@tanstack/vue-query";
import {DB} from "~/utils/appwrite";
import {DB_ID, COLLECTION_DEALS} from "~/app.constants";
import {KANBAN_DATA} from "~/components/kanban/kanban.data";
import {IDeal} from "~/types/deals.types";

export function useKanbanQuery() {

    return useQuery({
        queryKey: ['deals'],
        queryFn: () => DB.listDocuments(DB_ID, COLLECTION_DEALS),
        select(data) {
            const newBoard = [...KANBAN_DATA]
            const deals = data.documents as unkown as IDeal[]
        }
    })
}

