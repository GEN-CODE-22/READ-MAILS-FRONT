import { Message } from "imap-simple";

export interface ItemPopower {
  name: string;
  description: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}
export interface PlantaGEN {
  cia: string;
  planta: string;
  nombre: string;
  server: string;
}

export interface PlGEN {
  cia: string;
  pla: string;
  nombre: string;
  id: number;
  server: string;
}

export interface EmailFile {
  name: string;
  file?: ArrayBuffer;
}

export interface EmailError {
  date: Date | undefined;
  from: any;
  // headerLines: email.headerLines,
  header: any | undefined;
  //  html: email.html,
  subject: string | undefined;
  //  inReplyTo: email.inReplyTo,
  //  references: email.references,
  // messageId: email.messageId,
  //  priority: email.priority, No tiene data
  //  replyTo: email.replyTo,No tiene data
  text: string | undefined;
  to: any;
  priority: any;
  attachments?: any;
  cc: any;
  bcc: any;
  id: string | undefined;
}

export interface EmailFacturaError {
  parseEmail: EmailError;
  mail?: Message;
  files?: EmailFile[];
}

export interface IResponse<T> {
  ok: boolean;
  data: T;
  count: number;
}
