import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentUpdateInput = {
  agent?: string | null;
  property?: PropertyWhereUniqueInput | null;
};