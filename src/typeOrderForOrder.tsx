import { foodItemType } from "./foodItemType";



export interface addOnForSendingToTheServer {
    connent?: string;
    coument?: boolean;
    dateDat?: string;
    dateTime?: string;
    eMail?: string;
    firstName?: string;
    house?: string;
    lastName?: string;
    paymentType?: string;
    street?: string;
    telephone?: string;
}
export type TypeOrderForOrder = foodItemType[] & addOnForSendingToTheServer





