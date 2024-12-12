export type SelectOptionsType = { value: boolean; label: string };

export const isAvailableOptions: SelectOptionsType[] = [
  { value: true, label: "En stock" },
  { value: false, label: "En rupture" },
];

export const isPublicisedOptions: SelectOptionsType[] = [
  { value: false, label: "Sans pub" },
  { value: true, label: "Avec pub" },
];
