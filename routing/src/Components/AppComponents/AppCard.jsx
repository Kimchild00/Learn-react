import { Flex,Image,Badge,Icon ,Text,Spacer,Box,useColorModeValue, Center, Skeleton} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

export default function AppCard() {

    return (
      <Box borderBottomWidth="1px" display='flex' >
        <Box p="2">
          <Image borderRadius="md" src="https://i.pravatar.cc/50"/>
        </Box>
        <Box paddingLeft="1" paddingTop="1" paddingRight='1' >
              <Text fontWeight="bold" fontSize="xl">
                @Ini Nama...
              </Text>
              <Box display='flex' flexDirection='row' alignItems='center'>
                <Icon as={ArrowForwardIcon} color="green.500" />
                <Text color={useColorModeValue('gray.500', 'gray.300')} fontSize={{base:'xs',md:'xs',lg:'xs',xl:'md'}}>
                  #iniHashtag
                </Text> 
              </Box>
            <Box justifyContent='center'>
                
                <Badge ml='1' fontSize='0.8em' colorScheme='red'>
                Ini Badge merah
              </Badge>
              <Badge ml='1' fontSize='0.8em' colorScheme='green'>
                ini badge hijau
              </Badge>
              <Badge ml='1' fontSize='0.8em' colorScheme='yellow'>
                ini badge kuning
              </Badge>
              <Badge ml='1' fontSize='0.8em' colorScheme='blue'>
                ini badge biru
              </Badge>
  
            </Box>
            <Box fontSize="sm" >
                  Ini tempat naruh informasi Bisa naro LINK juga Loh
                  <Link to="/" style={{ color: 'blue' }}> WARNA BIRU</Link> 
                  
            </Box>
            <Center>
              <Image borderRadius="md" src="https://imagedelivery.net/46JjFsbElfX2IL16wJFTCA/e718dff1-f097-4b10-dc71-13f1b4e78700/thumbnail" />
              
            </Center>
             <Box>
              <Flex p="2" >
                <Text>Like</Text>
                <Spacer />
                <Text>Like</Text>
                <Spacer />
                <Text>Like</Text>
              </Flex>
            </Box>
          </Box>
          </Box>
    );
}