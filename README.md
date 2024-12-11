### **Frontend Developer Task: Mini Point of Sale (POS)**  

**Project Overview**

**Scenario:**  
Dogesh, a small business owner in a remote area with unstable network connectivity, needs a POS web application to efficiently run his business, regardless of network stability. Your mission is to develop a reliable solution using the provided Figma design.

---
[**Figma Design**](https://www.figma.com/design/oaIdXXbbkvPMPtUAdgOb6K/Task---Frontend?node-id=1-14&node-type=canvas)

### **Primary Task (Total: 50 points)**

#### **Drop-Downs (8 points)**  
- Integrate the following drop-downs with dummy data:  
   - Warehouses (name, ID).  
   - Brands (name, ID).  
   - Categories (name, ID).  
   - Users (name, ID).  
   - Payment Methods: Cash, Card.  
   - Payment Status: Paid, Due.  
   
   **Scoring Criteria**:  
   - All drop-downs integrated correctly (4 points).  
   - Proper handling of dummy data (4 points).  

#### **Filters (8 points)**  
- Create filters for the product list based on:  
   - Product Name (from a search bar).  
   - Warehouse, Brand, and Category (via drop-downs).  
   
   **Scoring Criteria**:  
   - Search bar functionality (4 points).  
   - Filters properly linked with drop-downs (4 points).

#### **Products List (12 points)**  
- Each product should include: Name, Image, Product ID, Category ID, Brand ID, Warehouse ID, Price, Color, Size, Tax (percentage), Tax Type (Included/Excluded), Local Discount (percentage).  
- On product click: Add the product to the cart. Multiple clicks update quantity and price.  

   **Scoring Criteria**:  
   - All required fields displayed for each product (6 points).  
   - Add-to-cart functionality and updating logic (6 points).  

#### **Cart (15 points)**  
- **Cart Table**: Display products in the cart and enable CRUD operations.  
- **Additional Calculations**:  
   - Sale discount (percentage or amount).  
   - Shipping charges.  
   - Summary: Total Quantity, Total Tax, Subtotal, Grand Total.  
- **Buttons**:  
   - **Pay Now**: Open payment modal, perform calculations, generate unique reference, and save sale details to the local database.  
   - **Reset**: Clear cart with confirmation modal.

   **Scoring Criteria**:  
   - Cart table and CRUD operations (7 points).  
   - Correct calculation logic (5 points).  
   - Functionality of Pay Now and Reset buttons (3 points).

#### **Core Feature: Recent Sales (7 points)**  
- Save sales data from "Pay Now" to IndexedDB and display it in a data table.  

   **Scoring Criteria**:  
   - IndexedDB saving and data retrieval (4 points).  
   - Displaying sales data correctly (3 points).  

---

### **Secondary Task (Total: 30 points)**

1. **Static dashboard design (7 points)**  
   - Follow the Figma design for layout and components.

2. **Full-screen mode toggle (7 points)**  
   - Implement a working full-screen toggle for the application.

3. **Dark mode toggle (7 points)**  
   - Add a dark mode toggle functionality.

4. **Shortcut keys: Reset (`F4`), Pay Now (`F5`) (9 points)**  
   - Implement keyboard shortcuts to trigger Reset and Pay Now.

---

### **Additional Notes (Total: 20 points)**  
- Highly recommended to follow the **SOLID principles** and a **modular pattern**.  
   - **Score**: 10 points for clear and effective implementation of SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion).
   
- Focus on **performance optimization** and **usability** to ensure seamless functionality.  
- Ensure **responsive design** for **lg, xl, 2xl**.  
- **Ensure type safety** throughout the application to minimize runtime errors and improve maintainability, using TypeScript or appropriate type-checking mechanisms.  
   - **Score**: 10 points for type safety with TypeScript or strong type checks ensuring less possibility of runtime errors.

---

### **Total Points: 100**  
- **Primary Task**: 50 points  
- **Secondary Task**: 30 points  
- **Additional Notes**: 20 points  

