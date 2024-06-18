import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Dashboard from './component/Dashboard';
import Gettingstarted from './component/Gettingstarted';
import Recentupdates from './component/RecentUpdates';
import Announcement from './component/announcement';
import  Integration from './Pages/Integration';
import Reports from './Pages/Reports';
import Items from './Pages/Inventory/Items';
import CompositeItems from './Pages/Inventory/CompositeItems';
import ItemGroups from './Pages/Inventory/ItemGroups';
import PriceLists from './Pages/Inventory/PriceLists';
import Adjustments from './Pages/Inventory/Adjustments';
import VendorCredits from './Pages/Purchases/VendorCredits';
import PaymentsMade from './Pages/Purchases/PaymentsMade';
import Bills from './Pages/Purchases/Bills';
import PurchaseOrders from './Pages/Purchases/PurchaseOrders';
import PurchaseReceives from './Pages/Purchases/PurchaseReceives';
import Vendors from './Pages/Purchases/Vendors';
import Customers from './Pages/Sales/Customers';
import Invoices from './Pages/Sales/Invoices';
import Packages from './Pages/Sales/Packages';
import SalesOrders from './Pages/Sales/SalesOrders';
import SalesReturns from './Pages/Sales/SalesReturns';
import Shipments from './Pages/Sales/Shipments';
import Documents from './Pages/Documents';
// import Chatgpttest from './component/chatgpttest';
import Sidebar from './component/sidebar';

function App() {
  return (
    <>
    <Router>
     <Routes>   
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/gettingstarted" element={<Gettingstarted/>} />
       <Route path="/recentupdates" element={<Recentupdates/>} />
       <Route path="/announcement" element={<Announcement/>} />
       <Route path="/integration" element={<Integration/>} />
       <Route path="/reports" element={<Reports/>} />
       <Route path="/documents" element={<Documents/>} />

       {/* Inventory */}
       <Route path="/items" element={<Items/>} />
       <Route path="/compositeitems" element={<CompositeItems/>} />
       <Route path="/itemgroups" element={<ItemGroups/>} />
       <Route path="/pricelists" element={<PriceLists/>} />
       <Route path="/adjustments" element={<Adjustments/>} />

       {/* Sales */}
       <Route path="/customers" element={<Customers/>} />
       <Route path="/invoices" element={<Invoices/>} />
       <Route path="/packages" element={<Packages/>} />
       <Route path="/salesorders" element={<SalesOrders/>} />
       <Route path="/salesreturns" element={<SalesReturns/>} />
       <Route path="/shipments" element={<Shipments/>} />
       

       {/* Purchases */}
       <Route path="/vendors" element={<Vendors/>} />
       <Route path="/purchaseorders" element={<PurchaseOrders/>} />
       <Route path="/purchasereceives" element={<PurchaseReceives/>} />
       <Route path="/bills" element={<Bills/>} />
       <Route path="/paymentsmade" elements={<PaymentsMade/>} />
       <Route path="/vendorcredits" elements={<VendorCredits/>} />
       {/* <Route path="/chatgpttest" element={<Chatgpttest/>} /> */}
    </Routes>
    </Router>
    </>
  );
}

export default App;
