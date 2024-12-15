import { openDB } from 'idb';

const dbName = 'POS_DB';
const storeName = 'payments';

export interface PaymentRecord {
  id?: number;
  date: string;
  receivedAmount: number;
  payingAmount: number;
  dueAmount: number;
  changeReturn: number;
  paymentType: string;
  paymentStatus: string;
  notes: string;
  totalProducts: number;
  totalAmount: number;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
}

const initDB = async () => {
  const db = await openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { 
          keyPath: 'id', 
          autoIncrement: true 
        });
      }
    },
  });
  return db;
};

export const addPayment = async (payment: Omit<PaymentRecord, 'id'>) => {
  const db = await initDB();
  return db.add(storeName, payment);
};

export const getPayments = async () => {
  const db = await initDB();
  return db.getAll(storeName);
};

export const getPaymentById = async (id: number) => {
  const db = await initDB();
  return db.get(storeName, id);
};

export const deletePayment = async (id: number) => {
  const db = await initDB();
  return db.delete(storeName, id);
};