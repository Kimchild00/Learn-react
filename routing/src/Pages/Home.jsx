// import React from 'react'
// import AppButton from '../Components/AppComponents/AppButton'
// import { Link } from "react-router-dom";

// import AppCard from '../Components/AppComponents/AppCard';

// function Home() {
//   return (
//       <>
//         <h1>
//           <Link to="/about">Ke Halaman About</Link>
//         </h1>
//         <AppCard />
//         <AppCard />
//         <AppCard />
//         <AppCard />
//         <AppButton />
//       </>
//   )
// }

// export default Home



import React from 'react'
import { Flex,Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";


import AppLayout from '../Components/AppLayouts/AppLayoutThree';
// import AppCard from '../Components/AppComponents/AppCard';
import AppBarMain from '../Components/AppBars/AppBarMain';
import AppBarRight from '../Components/AppBars/AppBarRight';
import AppBarSide from '../Components/AppBars/AppBarSide';
import AppStat from '../Components/AppComponents/AppStat';


function Home() {
  const {LeftLayout,MainLayout,RightLayout} = AppLayout();

  return (
    <>
      <Text> <Link to="/about">About</Link> </Text>
      <Flex height="99vh">
        {LeftLayout(AppBarSide)}
        {MainLayout(AppBarMain)}
        {RightLayout(AppBarRight)}
      </Flex>
    </>
  )
}

export default Home