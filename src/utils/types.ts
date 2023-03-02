export interface wallet {
  name: string;
  logo: string;
}

export interface cryptoCurrencyType {
  name: string;
  logo: string;
}

export interface connectButton {
  name: string;
  link: string;
}

export interface eggProperty {
  description: string;
  value: string;
}

export interface StatusComponentProps {
  title: string;
  icon: string;
  properties: eggProperty[];
  eggStatusApprovalLink: eggStatusApprovalLink;
}
export interface eggStatusApprovalLink {
  desciption: string;
  url: string;
}
