import { Box } from "@chakra-ui/react"

function AppLayoutThree (){
    
    const LeftLayout = (Content) =>{
        return(
            <Box height="full" flex='1' overflowY="auto" borderRightWidth="1px" justifyContent="flex-end">
                <Content/>
            </Box>
        )
    }
    const MainLayout = (Content)=>{
        return(
            <Box borderRightWidth="1px" width={{md: '30rem',xl: '40rem',}} display='flex' overflowY="auto">
                
                <Content/>
            </Box>
        )
    }

    const RightLayout = (Content)=>{
        return(
            <Box flex="1" width={{md: '30rem',xl: '40rem',}} overflowY="auto">
                <Content/>
          </Box>
        )
    }

    return{LeftLayout,MainLayout, RightLayout};
}

export default AppLayoutThree