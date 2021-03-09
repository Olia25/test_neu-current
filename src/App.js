import React,{useState} from 'react'
import './App.css';
import {
  useQuery,
} from "@apollo/client";
import 'antd/dist/antd.css';
import SelectedProduct from "./page/SelectedProduct";
import {getCurrencyQuery} from './constants/getCurrencyQuery'


function App() {
  return (
      <>
          <SelectedProduct/>
      </>
  );

}

export default App;

// import { Layout } from "antd";
// import NavBar from "./aaa/NavBar"
// import SideBar from "./aaa/SideBar";
// import TopicMenu from "./aaa/TopicMenu";
//
// function App() {
//     const topics = ["First topic", "Second topic", "Third topic"];
//     const [contentIndex, setContentIndex] = useState(0);
//     const [selectedKey, setSelectedKey] = useState("0");
//     // const changeSelectedKey = (event) => {
//     //     const key = event.key;
//     //     setSelectedKey(key);
//     //     setContentIndex(+key);
//     // };
//     const Menu = (
//         <TopicMenu
//             topics={topics}
//             // selectedKey={selectedKey}
//             // changeSelectedKey={changeSelectedKey}
//         />
//     );
//     return (
//         <div className="App">
//             <NavBar menu={Menu} />
//             <Layout>
//                 {/*<SideBar menu={Menu} />*/}
//                 {/*<Layout.Content className="content">*/}
//                 {/*    {topics[contentIndex]}*/}
//                 {/*</Layout.Content>*/}
//             </Layout>
//         </div>
//     );
// }
// export default App;