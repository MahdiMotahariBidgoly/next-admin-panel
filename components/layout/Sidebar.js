
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link href="/" className={router.pathname == "/"? "nav-link active" : "nav-link"} aria-current="page">
                <i className="bi bi-grid me-2">داشبورد</i>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/users" className={router.pathname.includes("/users") ? "nav-link active" : "nav-link"}>
                <i className="bi bi-people me-2"> کاربران</i>
               
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/products" className={router.pathname.includes("/products") ? "nav-link active" : "nav-link"}>
             
                <i className="bi bi-box-seam me-2">محصولات</i>
                
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/categories" className={router.pathname.includes("/categories") ? "nav-link active": "nav-link"}>
                <i className="bi bi-grid-3x3-gap me-2" >دسته بندی</i>
                
              
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/orders" className={router.pathname.includes("/orders") ? "nav-link active" : "nav-link"}>
                <i className="bi bi-grid-3x3-gap me-2">سفارشات</i>
                
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/transactions" className={router.pathname.includes("/transactions") ? "nav-link active" : "nav-link"}>
                <i className="bi bi-grid-3x3-gap me-2">تراکنش ها</i>
                
             
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/coupons" className={router.pathname.includes("/coupons") ? "nav-link active":"nav-link"}>
                <i className="bi bi-grid-3x3-gap me-2">تخفیف ها</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;


// import Link from "next/link";
// import { useRouter } from "next/router";

// const Sidebar = () => {
//   const router = useRouter();
//   return (
//     <nav
//       id="sidebarMenu"
//       className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
//     >
//       <div className="position-sticky pt-3">
//         <ul className="nav flex-column">
//           <li className="nav-item">
//             <Link href="/" legacyBehavior>
//               <a
//                 className={
//                   router.pathname == "/" ? "nav-link active" : "nav-link"
//                 }
//                 aria-current="page"
//               >
//                 <i className="bi bi-grid me-2"></i>
//                 داشبورد
//               </a>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="/users" legacyBehavior>
//               <a
//                 className={
//                   router.pathname.includes("/users")
//                     ? "nav-link active"
//                     : "nav-link"
//                 }
//               >
//                 <i className="bi bi-people me-2"></i>
//                 کاربران
//               </a>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="/products" legacyBehavior>
//               <a
//                 className={
//                   router.pathname.includes("/products")
//                     ? "nav-link active"
//                     : "nav-link"
//                 }
//               >
//                 <i className="bi bi-box-seam me-2"></i>
//                 محصولات
//               </a>
//             </Link>
//           </li>

//           <li className="nav-item">
//             <Link href="/categories" legacyBehavior>
//               <a
//                 className={
//                   router.pathname.includes("/categories")
//                     ? "nav-link active"
//                     : "nav-link"
//                 }
//               >
//                 <i className="bi bi-grid-3x3-gap me-2"></i>
//                 دسته بندی
//               </a>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="/orders" legacyBehavior>
//               <a
//                 className={
//                   router.pathname.includes("/orders")
//                     ? "nav-link active"
//                     : "nav-link"
//                 }
//               >
//                 <i className="bi bi-grid-3x3-gap me-2"></i>
//                 سفارشات
//               </a>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="/transactions" legacyBehavior>
//               <a
//                 className={
//                   router.pathname.includes("/transactions")
//                     ? "nav-link active"
//                     : "nav-link"
//                 }
//               >
//                 <i className="bi bi-grid-3x3-gap me-2"></i>
//                 تراکنش ها
//               </a>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link  legacyBehavior href="/coupons">
//               <a
//                 className={
//                   router.pathname.includes("/coupons")
//                     ? "nav-link active"
//                     : "nav-link"
//                 }
//               >
//                 <i className="bi bi-grid-3x3-gap me-2"></i>
//                 تخفیف ها
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Sidebar;
