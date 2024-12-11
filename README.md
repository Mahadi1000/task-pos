**Frontend Developer Task: Mini Point of Sale (POS)**  

**Project Overview**  

**Scenario:**  
Dogesh, a small business owner in a remote area with unstable network connectivity, needs a POS web application to efficiently run his business, regardless of network stability. Your mission is to develop a reliable solution using the provided Figma design.

---
[**Figma Design**](https://www.figma.com/design/oaIdXXbbkvPMPtUAdgOb6K/Task---Frontend?node-id=1-14&node-type=canvas)

### **Primary Task**

#### **Drop-Downs**  
Integrate the following drop-downs with dummy data:  
1. Warehouses (name, ID).  
2. Brands (name, ID).  
3. Categories (name, ID).  
4. Users (name, ID).  
5. Payment Methods: Cash, Card.  
6. Payment Status: Paid, Due.

#### **Filters**  
Create filters for the product list based on:  
1. Product Name (from a search bar).  
2. Warehouse, Brand, and Category (via drop-downs).

#### **Products List**  
1. Each product should include: Name, Image, Product ID, Category ID, Brand ID, Warehouse ID, Price, Color, Size, Tax (percentage), Tax Type (Included/Excluded), Local Discount (percentage).  
2. On product click: Add the product to the cart. Multiple clicks update quantity and price.

#### **Cart**  
1. **Cart Table**: Display products in the cart and enable CRUD operations.  
2. **Additional Calculations**:  
   - Sale discount (percentage or amount).  
   - Shipping charges.  
   - Summary: Total Quantity, Total Tax, Subtotal, Grand Total.  
3. **Buttons**:  
   - **Pay Now**: Open payment modal, perform calculations, generate unique reference, and save sale details to the local database.  
   - **Reset**: Clear cart with confirmation modal.

#### **Core Feature: Recent Sales**  
Save sales data from "Pay Now" to IndexedDB and display it in a data table.

---

### **Secondary Task**  

1. Static dashboard design (excluding "Recent Sales").  
2. Full-screen mode toggle.  
3. Dark mode toggle.  
4. Shortcut keys: Reset (`F4`), Pay Now (`F5`).

---

### **Additional Notes**  
- Highly recommended to follow the **SOLID principles** and a **modular pattern**.  
- Focus on **performance optimization** and **usability** to ensure seamless functionality.  
- Ensure responsive design for **lg, xl, 2xl**



**Goal:** Empower Dogesh to efficiently manage his business, regardless of network stability.
