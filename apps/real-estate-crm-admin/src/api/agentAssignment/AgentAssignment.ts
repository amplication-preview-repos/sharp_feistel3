import { Property } from "../property/Property";

export type AgentAssignment = {
  agent: string | null;
  createdAt: Date;
  id: string;
  property?: Property | null;
  updatedAt: Date;
};
