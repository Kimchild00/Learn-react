import * as React from "react";
import { Flex,Stack,Image,Badge,HStack,Icon ,Text,Spacer,Box,useColorModeValue} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";


export default function AppCardSmall(props) {
  return (
  <Box display='flex' alignItems='center' justifyContent='center'>
        <Box p="2" >
            <Image borderRadius="md" src={props.image?props.image:"https://i.pravatar.cc/50"} />
        </Box>
        <Box p="5" paddingLeft="1" paddingTop="1" paddingBottom='1'>
          <Text fontWeight="bold" fontSize="xl">
            <Link to='/'> 
              @Melinda_Paul
            </Link>
            </Text>
            <Box display='flex' flexDirection='row' alignItems='center'>
              <Icon as={ArrowForwardIcon} color="green.500" />
              <Text color={useColorModeValue('gray.500', 'gray.300')} fontSize={{base:'sm',md:'md',lg:'md',xl:'md'}}>
                x091..C0912
              </Text> 
            </Box>
          <Box>
            <Badge ml='1' fontSize='0.8em' colorScheme='green'>
              Sold
            </Badge>
            <Badge ml='1' fontSize='0.8em' colorScheme='red'>
              Bought
            </Badge>
            <Badge ml='1' fontSize='0.8em' colorScheme='yellow'>
              Minted
            </Badge>
          </Box>
        </Box>
        <Box display='flex' alignItems='center' justifyContent='center' p='2' flexFlow='column'>
          <Text>
            Profit
          </Text>
          <Text fontSize='x-large'>
           ETH 3
          </Text>
        </Box>
  </Box>
  );
}
